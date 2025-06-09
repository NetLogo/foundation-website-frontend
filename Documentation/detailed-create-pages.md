# Creating a New Page

A simplified version of this documentation can be found [here](create-pages.md)

Creating a new page is a simple process. The project repository makes this process very simple. The only change you need to make is creating an Astro file within the pages folder. The name you attribute to the file is the name of the page. For instance, if I wanted to create a new page at www.netlogo.com/contact then I would create a file in the pages folder called contact.astro, which would then create a page at the previously discussed path.

# Setting Up Your Page

We can break down each page in three different ways:
1. Setup Layout
2. Get Data
3. Display Data
Here is an example page broken down:

```
---

import Layout from "../layouts/Layout.astro";
import NetLogoApi from "../utils/api.js";
import DynamicPage from "../components/dynamic_pages/dynamic-page";

// Fetch the resources data from the API
// Get Page Data
const api = new NetLogoApi();
const pageData = await api.getResourcesData();

---
<!-- Setup Page Layout -->
<Layout show_footer_buttons={false}>
    <!-- Display Data -->
    <DynamicPage pageData = {pageData}/>
</Layout>
```

This is the code for the resources.astro page. There are dividers that help Astro understand what is JS code and what is HTML code. The first step to setting up a page is the Setup of the Layout.

## Setup Layout
This step helps overcome the hurdle of setting up the html metadata and header/footer placement. The only thing this step requires is the import of the Layout.astro file and using the component exported within it. At this point your page should loo like this:
```
---
import Layout from "../layouts/Layout.astro";
---

<!-- Setup Page Layout -->

<Layout show_footer_buttons={false}>

</Layout>
```
This code now displays the footer and header in your newly created page.  Something to note is that you can modify the Layout a bit. The only customizability currently in place is being able to dictate whether the footer Get NetLogo and Donate buttons get displayed via a Boolean. So, modify that based on your page.

Review this to understand a bit more about the Directus UI and how to navigate it:
https://docs.directus.io/user-guide/overview/glossary.html#collections

Also, make sure to change the access policies of whatever collection you are trying to create, so the data can be accessed through the frontend
## Get Data 
This step is a bit more complex than the rest. This step requires you to interact with Directus. Your first step would be to create your Directus collection and understand the schema of it. There are two flows that will be covered here:
1. Data for a dynamic page
2. Data for a custom page
There is currently support for dynamic pages that require a very specific collection layout. So now lets cover each type

### Dynamic Pages
Dynamic pages will require a Directus collection that isn't a single object and has the following entries:
- section title
- section component
As such, your data would look something like this when it being imported to the frontend:
```
[{section_title: "some name", 
  section_content: "Some long paragraph of sorts that will then be dispalyed on                       the Frontend"},
 {section_title: "a different section name", 
  section_content: "Another long paragraph of sorts that will then be dispalyed on                     the Frontend"}
]
```

### Custom Pages
Custom pages mean that you will have a unique Directus collection. in this case, the best I can do is direct you to the Directus documentation so you can either explore what is possible or execute what you already have in mind.
https://docs.directus.io/reference/system/collections.html

## Get Data Pt.2

At this point, you should have created your Directus collection and only need to connect it to your frontend. To do so, you will need to modify 3 files:
- the .astro file you created for your page
- api.ts
- queries.ts
The file of our API requests are as follows
queries.ts -> api.ts -> .astro
So, our queries.ts tells our api.ts file what data we want from Directus. Then, api.ts send a request to Directus to then receive this data. It simplifies the process through a class based call. This data can be accessed in our .astro file through a fucntion call, which then means we have our Directus data in our page. Here is a quick breakdown of how to incorporate your new collection within these files. 
### Creating a New Query
To do this, go to queries.ts. Here you will see a large amount of queries that you can base yours off of. If you are trying to create a dynamic page, your query should look something like this:
```
some_name: gql`
    query some_name {
      collection_name {
        section_title
        section_content
      }
    }
  `,
  ```
  The only changes you would need to make are more appropriate and accurate names. You would need to replace 'collection_name' with the name of the collection you create in Directus. This is case sensitive, so make sure to look out for that. Additionally, you would change 'some_name' with a more representative name of the operation and the data you are trying to get. 
  
 If you aren't trying to create a dynamic page, the biggest thing you have to make sure of is that all the fields you want are in the query. If you have your collection have one to many relationships, then you can reference other queries like the mainPageData for an example of how to make those queries.

When you are done creating your query, make sure that it is a part of the queries object that is being exported.
### Making the API call Function
This step requires changes to api.ts. Within the NetLogoAPI class, you will need to create a new function for the API call you are trying to make and the interface for the data that will be received.
Your interface would look something like this:
```
export interface PageEntry {
  section_title: string;
  section_content: string;
}
```
This should follow the structure of your collection and the data you are trying to get through your query.

Now, the function will look something like this:
```
async getResourcesData() {
    const resourcesData = await this.graphqlFetchData<{
      resources: PageEntry[];
    }>(queries.resourcesData);

    return resourcesData.resources;
  }
```
If your data doesn't require any pre processing, then your query can look as simple as is shown above. 
### Adding the API Call to your page
This step is also fairly simple. All you need to do is import the NetLogoAPI class from api.ts into your page's .astro file. Now, you have to create an instance of the class and call the API fucntion you crateed om the previosu step. This should look like this:
```
---

import Layout from "../layouts/Layout.astro";
import NetLogoApi from "../utils/api.js";

// Fetch the resources data from the API
// Get Page Data
const api = new NetLogoApi();
const pageData = await api.getResourcesData();

---
<!-- Setup Page Layout -->
<Layout show_footer_buttons={false}>
</Layout>
```

## Displaying Page Data

Once your data is loaded into `pageData`, you can pass it as a prop to your components and render it dynamically.

For dynamic pages, you can use the `DynamicPage` component to map over your `pageData` array and render each section. For instance:
```
---
import Layout from "../layouts/Layout.astro";
import NetLogoApi from "../utils/api.js";
import DynamicPage from "../components/dynamic_pages/dynamic-page";

// Get Page Data
const api = new NetLogoApi();
const pageData = await api.getResourcesData();
---
<!-- Setup Page Layout -->
<Layout show_footer_buttons={false}>
  <!-- Display Data -->
  <DynamicPage pageData={pageData} />
</Layout>
