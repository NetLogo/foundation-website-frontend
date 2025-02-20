
# next step is putting on the refrences on the page
# getting the data looping thru each of the years and years as heading.
# in press, boolean top, section.

from directus_sdk_py import DirectusClient
from bs4 import BeautifulSoup
import os

# Directus setup (Replace with the correct API URL)
DIRECTUS_URL = "https://backend.netlogo.org"  # Base API URL, not Admin panel URL
DIRECTUS_TOKEN = "0ylVAJfZwVbnR3YKdSlbkA8pwGIhU4Ca"



# Initialize Directus client
client = DirectusClient(DIRECTUS_URL, DIRECTUS_TOKEN)

def extract_references(file_path):
    with open(file_path, encoding="utf8") as file:
        soup = BeautifulSoup(file, 'html.parser')

    References = []

    for year_header in soup.find_all("h2"):
        year_link = year_header.find("a")
        if year_link and year_link.get("name"):  
            year = year_link.get("name").strip()  

            if year.isdigit():
                year = int(year)
            else:
                continue  

            reference_list = year_header.find_next("ul").find_all("li", class_="ccl")
            
            for ref in reference_list:
                References.append({"year": year, "reference": ref.get_text()})

    return References

def post_references_to_directus(References):
    for ref in References:
        try:
            response = client.create_item("References", ref)  # Fix: Correct SDK method
            print(f"Posted: {ref} - Response: {response}")
        except Exception as e:
            print(f"Error posting {ref}: {e}")

# Run the function and post to Directus
file_path = "src/utils/references.shtml"
References = extract_references(file_path)
post_references_to_directus(References)


# from directus_sdk_py import DirectusClient
# from bs4 import BeautifulSoup
# import os

# # Directus setup (replace with your Directus URL and token)
# DIRECTUS_URL = "https://backend.netlogo.org/admin/settings/data-model/References"
# DIRECTUS_TOKEN = "aLmEjiB3ohvzDtZj-tmXE4EiGfgYYq_A"

# client = Directus(DIRECTUS_URL, token=DIRECTUS_TOKEN)

# def extract_references(file_path):
#     with open(file_path, encoding="utf8") as file:
#         soup = BeautifulSoup(file, 'html.parser')

#     references = []

#     for year_header in soup.find_all("h2"):
#         year_link = year_header.find("a")
#         if year_link and year_link.get("name"):  
#             year = year_link.get("name").strip()  

#             if year.isdigit():
#                 year = int(year)
#             else:
#                 continue  

#             reference_list = year_header.find_next("ul").find_all("li", class_="ccl")
            
#             for ref in reference_list:
#                 references.append({"year": year, "reference": ref.get_text()})

#     return references

# def post_references_to_directus(references):
#     for ref in references:
#         try:
#             response = client.items("references").create(ref)
#             print(f"Posted: {ref} - Response: {response}")
#         except Exception as e:
#             print(f"Error posting {ref}: {e}")

# # Run the function and post to Directus
# file_path = "src/utils/references.shtml"
# references = extract_references(file_path)
# post_references_to_directus(references)







# from bs4 import BeautifulSoup

# def extract_references(file_path):
#     with open(file_path, encoding="utf8") as file:
#         soup = BeautifulSoup(file, 'html.parser')

#     references = []

#     # Find all year headers
#     for year_header in soup.find_all("h2"):
#         year_link = year_header.find("a")
#         if year_link and year_link.get("name"):  
#             year = year_link.get("name").strip()  # Extract year and remove any extra spaces

#             # Check if the year is a valid number before converting
#             if year.isdigit():
#                 year = int(year)  # Convert valid years to integers
#             else:
#                 continue  # Skip non-numeric years like "In Press"

#             # Find all following <li> elements with class "ccl" (references)
#             reference_list = year_header.find_next("ul").find_all("li", class_="ccl")
            
#             for ref in reference_list:
#                 references.append((year, ref.get_text()))  # Store as (year, reference) tuple

#     # Print each tuple with a line in between
#     for ref_tuple in references:
#         print(ref_tuple)
#         print("\n")  # Separator line with empty lines above and below

# #print by using the funciton 
# extract_references("src/utils/references.shtml")

# #push my changes 

# #phython wrapper for the directus api, 

# # instead of printing (posting fuction for collection to directus) 

# #pull request from this to the directus is my milestone 

# #create a collection in directus a refrences, a year for a number, the refrence as text
# #boolean for whether its press or not in directus own seciton on the page (should not have a year)



# # from bs4 import BeautifulSoup
# # import re

# # def extract_references(file_path):
# #     with open(file_path, encoding="utf8") as file:
# #         soup = BeautifulSoup(file, 'html.parser')

# #     references = []

# #     # Find all year headers
# #     for year_header in soup.find_all("h2"):
# #         year_link = year_header.find("a")
# #         if year_link and year_link.get("name"):  
# #             year = year_link.get("name")  # Extract year from the <a name="2023"> tag
            
# #             # Find all following <li> elements with class "ccl" (references)
# #             reference_list = year_header.find_next("ul").find_all("li", class_="ccl")
            
# #             for ref in reference_list:
# #                 references.append((int(year), ref.get_text()))  # Store as (year, reference) tuple

# #     # Print each tuple with a line in between
# #     for ref_tuple in references:
# #         print(ref_tuple)
# #         print("\n" + "-" * 80 + "\n")  # Separator line with empty lines above and below

# # # Example usage
# # extract_references("src/utils/references.shtml")

   
   
#     # from bs4 import BeautifulSoup

#     # file = open("src/utils/references.shtml", encoding="utf8")
#     # # how file is encoded

#     # #how you open a file
#     # # with open("src/utils/references2.shtml") as fp:

#     # def print_references(file_path):
#     #     with open(file_path, encoding="utf8") as file:
#     #         soup = BeautifulSoup(file, 'html.parser')

#     # soup = BeautifulSoup(file, 'html.parser')

#     # references = soup.find_all("li", class_="ccl")

#     #     # Print each reference with a line in between
#     # for reference in references:
#     #     print(reference.get_text())  # Extract and print the text
#     #     print("\n")  # Print a separator line

#     # # Example usage
#     # print_references("src/utils/references.shtml")
    
    
#     # from bs4 import BeautifulSoup

#     # file = open("src/utils/references.shtml", encoding="utf8")
#     # # how file is encoded

#     # #how you open a file
#     # # with open("src/utils/references2.shtml") as fp:

#     # def print_references(file_path):
#     #     with open(file_path, encoding="utf8") as file:
#     #         soup = BeautifulSoup(file, 'html.parser')

#     # soup = BeautifulSoup(file, 'html.parser')

#     # references = soup.find_all("li", class_="ccl")

#     #     # Print each reference with a line in between
#     # for reference in references:
#     #     print(reference.get_text())  # Extract and print the text
#     #     print("\n")  # Print a separator line

#     # # Example usage
#     # print_references("src/utils/references.shtml")


# #goal:use beautiful soup to print all the refrences with a line in between each reference.

# #print out tuple that has the year and the text of the whole reference with a line in between each tuple

# #(2025, refrence)

# #seperate fields
# #upload two seperate fields into directus



# # milestone: getting the tuples into directus












# #get info out, print all of the ref to the terminal out 

# #documentation and tutorial
# #html file

# #upload to directus field year, text of the reference







