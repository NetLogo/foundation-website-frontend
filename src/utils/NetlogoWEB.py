

from directus_sdk_py import DirectusClient
from bs4 import BeautifulSoup
import os
import time
import requests
import re
from tenacity import retry, stop_after_attempt, wait_exponential

from dotenv import load_dotenv

load_dotenv()


print("*******Uploading onto Directus Starting*******")
DIRECTUS_TOKEN = os.getenv("DIRECTUS_TOKEN")

# Directus setup (Replace with the correct API URL)
DIRECTUS_URL = "https://backend.netlogo.org"  # Base API URL, not Admin panel URL

# Initialize Directus client
client = DirectusClient(DIRECTUS_URL, DIRECTUS_TOKEN)

def is_ccl_authored(reference_text: str) -> bool:
    ccl_keywords = ["Wilensky", "Center for Connected Learning", "Horn"]
    return any(author in reference_text for author in ccl_keywords) 

def extract_raw_year_blocks(file_path):
    with open(file_path, encoding='utf8') as file:
        raw_html = file.read()

    pattern = re.compile(
        r'<h2>\s*<a\s+name=["\'](\d{4})["\']>\s*\1\s*</a>\s*</h2>\s*<ul>(.*?)</ul>', re.DOTALL | re.IGNORECASE
    )

    results = []

    for match in pattern.finditer(raw_html):
        year = int(match.group(1))
        ul_inner = match.group(2)

        li_open_count = ul_inner.count('<li>')
        ccl_li_opens = ul_inner.count('<li class="ccl">')
        li_close_count = ul_inner.count('</li>')

        total_opens = li_open_count + ccl_li_opens

        if total_opens != li_close_count:
            print(f"Incorrect in {year}: <li>: {total_opens}, </li>: {li_close_count}")
        else:
            print(f"Correct in {year}: <li>: {total_opens}, </li>: {li_close_count}")

        results.append({
            "year": year,
            "li_open_counts": total_opens,
            "li_close_count": li_close_count
        })

        # pattern2 = re.compile(r'<li>(.*?)</li>', re.DOTALL)
        # for item in pattern2.finditer(ul_inner):
        #     item_chars = len(item.group(1))

        #     if item_chars > 700:
        #         print(f"Reference in {year} with {item_chars} characters")
        #         print(f"Starts with: {item.group(1)[:30]!r}")

        lines = re.split(r'\n', ul_inner)

        #
        # I can't think of another way but this is not the best checker cause some references take up more than a line
        # so double check the refernce in the shtml to see if it's really a bad reference
        #

        for line in lines:
            if (line.startswith('<li>') or line.startswith('<li class="ccl">')) and ('</li>' not in line):
                print(f"Bad reference in {year}: {line[:60]}")

    return results

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
            next_year_refs = year_header.find_next("ul")
            reference_list = next_year_refs.find_all("li")
            
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
        # print(f"Posted: {ref} - Response: {response}")
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
file_path = "references.shtml"
checking_extraction = extract_raw_year_blocks(file_path)
# references = extract_references(file_path)
# post_references_to_directus(references)