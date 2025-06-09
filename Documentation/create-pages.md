# Creating a New Page
A more detailed version of this documentation can be found [here](detailed-create-pages.md)

Creating a new page is a simple process. You only need to create a new Astro file inside the `pages/` folder.

The filename becomes the page's route. For instance:

- Creating `contact.astro` → `www.netlogo.com/contact`.
    

---

# Table of Contents

- [Setting Up Your Page](#setting-up-your-page)    
    - [1. Setup Layout](#1-setup-layout)
    - [2. Get Data](#2-get-data)
        - [subsections Pages](#subsections-pages)
        - [Custom Pages](e#custom-pages)
    - [3. Connect Data](#3-connect-data)
- [Displaying Page Data](#displaying-page-data)
    

---

# Setting Up Your Page

Every page generally follows three steps:

1. **Setup Layout**
    
2. **Get Data**
    
3. **Display Data**
    

Here’s an example breakdown for a page:

```astro
---
import Layout from "../layouts/Layout.astro";
import NetLogoApi from "../utils/api.js";
import subsectionsPage from "../components/subsections_pages/subsections-page";

// Get Page Data
const api = new NetLogoApi();
const pageData = await api.getResourcesData();
---
<!-- Setup Page Layout -->
<Layout show_footer_buttons={false}>
  <!-- Display Data -->
  <subsectionsPage pageData={pageData} />
</Layout>
```

---

## 1. Setup Layout

This step sets up the page structure, including the header and footer.

```astro
---
import Layout from "../layouts/Layout.astro";
---
<!-- Setup Page Layout -->
<Layout show_footer_buttons={false}>
</Layout>
```

By default, the footer contains **Get NetLogo** and **Donate** buttons. You can control their visibility with the `show_footer_buttons` prop.

### 🔗 Related

- [Directus UI Overview](https://docs.directus.io/user-guide/overview/glossary.html#collections)
    
- Remember to update the **Access Policies** of your Directus collection to allow frontend access.
    

---

## 2. Get Data

This step involves interacting with Directus to fetch data for your page.

There are two main flows:

1. **subsections Pages** — A common page structure with repeating sections.
    
2. **Custom Pages** — A fully customized page based on your needs.
    

---

### subsections Pages

subsections pages require a collection with:

- `section_title`
    
- `section_content`
    

Example expected data:

```json
[
  {
    "section_title": "Some Section",
    "section_content": "Long paragraph displayed on the frontend."
  },
  {
    "section_title": "Another Section",
    "section_content": "Another paragraph displayed on the frontend."
  }
]
```

---

### Custom Pages

Custom pages are backed by a unique Directus collection schema.

👉 For creating and managing collections:

- [Directus Collections Documentation](https://docs.directus.io/reference/system/collections.html)
    

---

## 3. Connect Data

After setting up your Directus collection, you need to wire it to your frontend.

This involves updating:

- `.astro` page file
    
- `api.ts`
    
- `queries.ts`
    

Data flow:

```
queries.ts → api.ts → .astro file
```

### Creating a New Query (`queries.ts`)

Example query for a subsections page:

```ts
some_name: gql`
  query some_name {
    collection_name {
      section_title
      section_content
    }
  }
`,
```

Notes:

- Replace `collection_name` with your Directus collection name (case-sensitive).
    
- Replace `some_name` with a representative operation name.
    
- Export your new query in the `queries` object.
    

---

### Creating the API Call (`api.ts`)

Inside the `NetLogoApi` class:

```ts
export interface PageEntry {
  section_title: string;
  section_content: string;
}

async getResourcesData() {
  const resourcesData = await this.graphqlFetchData<{
    resources: PageEntry[];
  }>(queries.resourcesData);

  return resourcesData.resources;
}
```

- The interface should match your query’s response structure.
    
- Keep your API function simple if no pre-processing is required.
    

---

### Using the API Call (`.astro` Page)

In your `.astro` page file:

```astro
---
import Layout from "../layouts/Layout.astro";
import NetLogoApi from "../utils/api.js";

// Get Page Data
const api = new NetLogoApi();
const pageData = await api.getResourcesData();
---
<!-- Setup Page Layout -->
<Layout show_footer_buttons={false}>
  <subsectionsPage pageData={pageData} />
</Layout>
```

---

# Displaying Page Data

Once your data is loaded into `pageData`, you can pass it as a prop to your components and render it subsectionsally.

For subsections pages, you can use the `subsectionsPage` component to map over your `pageData` array and render each section. For instance:
```
---
import Layout from "../layouts/Layout.astro";
import NetLogoApi from "../utils/api.js";
import subsectionsPage from "../components/subsections_pages/subsections-page";

// Get Page Data
const api = new NetLogoApi();
const pageData = await api.getResourcesData();
---
<!-- Setup Page Layout -->
<Layout show_footer_buttons={false}>
  <!-- Display Data -->
  <subsectionsPage pageData={pageData} />
</Layout>
```

