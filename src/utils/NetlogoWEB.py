

from directus_sdk_py import DirectusClient
from bs4 import BeautifulSoup
import os
import time
import requests
from tenacity import retry, stop_after_attempt, wait_exponential

from dotenv import load_dotenv

load_dotenv()

DIRECTUS_TOKEN = os.getenv("DIRECTUS_TOKEN")

# Directus setup (Replace with the correct API URL)
DIRECTUS_URL = "https://backend.netlogo.org"  # Base API URL, not Admin panel URL

# Initialize Directus client
client = DirectusClient(DIRECTUS_URL, DIRECTUS_TOKEN)

def is_ccl_authored(reference_text: str) -> bool:
    ccl_keywords = ["Wilensky", "Center for Connected Learning", "Horn"]
    return any(author in reference_text for author in ccl_keywords) 

def extract_references(file_path):
    with open(file_path, encoding="utf8") as file:
        soup = BeautifulSoup(file, 'html.parser')

    references = []

    for year_header in soup.find_all("h2"):
        year_link = year_header.find("a")
        if year_link and year_link.get("name"):  
            year = year_link.get("name").strip()  

            if year.isdigit():
                year = int(year)
            else:
                continue  

            #reference_list = year_header.find_next("ul").find_all("li", class_="ccl")
            reference_list = year_header.find_next("ul").find_all("li") 
            
            # for ref in reference_list:
            #     references.append({"year": year, "reference": ref.get_text()})
            for ref in reference_list:
                ref_text = ref.get_text()
                references.append({
                    "year": year,
                    "reference": ref_text,
                    "is_ccl": is_ccl_authored(ref_text)  
                })

    return references
#this i added due to a HTTPSConnectionPool(host='backend.netlogo.org', port=443): Read timed out. (read timeout=None) error
# I Defined a retry decorator to handle transient failures
# - stop_after_attempt(3): Attempt the function up to 3 times before giving up.
# - wait_exponential: Wait time increases exponentially between retries.
#   - multiplier=1: Base multiplier for the exponential backoff.
#   - min=4: Minimum wait time in seconds.
#   - max=10: Maximum wait time in seconds.
@retry(stop=stop_after_attempt(3), wait=wait_exponential(multiplier=1, min=4, max=10))
def post_reference_to_directus(ref):
    try:
        # Attempt to post a reference to Directus
        response = client.create_item("References", ref)
        print(f"Posted: {ref} - Response: {response}")
        # Catch specific timeout exceptions to handle network timeouts
    except requests.exceptions.Timeout:
        print(f"Timeout posting {ref}. Retrying...")
        raise
    except Exception as e:
        print(f"Error posting {ref}: {e}")
        raise

def post_references_to_directus(references):
    for ref in references:
        try:
            post_reference_to_directus(ref)
        except Exception as e:
            print(f"Failed to post {ref} after retries: {e}")

# Run the function and post to Directus
file_path = "src/utils/references.shtml"
references = extract_references(file_path)
post_references_to_directus(references)

