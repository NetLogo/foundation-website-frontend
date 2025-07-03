from directus_sdk_py import DirectusClient
import os
from dotenv import load_dotenv

load_dotenv()

DIRECTUS_URL = "https://backend.netlogo.org"
DIRECTUS_TOKEN = os.getenv("DIRECTUS_TOKEN")
client = DirectusClient(DIRECTUS_URL, DIRECTUS_TOKEN)

#Change the collection name
collection_name = "References"

all_items = client.get_items(collection_name)

for item in all_items:
    # print(item)
    item_id = item["id"]
    try:

        client.delete_item(collection_name, item_id)
        print(f"Deleted item with ID: {item_id}")
    except Exception as e:
        raise Exception(f"Failed to delete item {item_id}: {e}")
