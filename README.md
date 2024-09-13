## NetLogo Website Redesign
### Build 
```
docker build -t netlogo-website .
docker run -p 3000:3000 netlogo-website
```

### Proposed CMS:
- We can use a self-hosted headless CMS to handle the backend content. Specifically we can use *directus*
- We can host the directus backend on a server. 
- http://130.245.173.208:8055/admin/settings/data-model
- Fetch content: `http://130.245.173.208:8055/items/announcements`

### Proposed Frontend
- React + Typescript, with Astro for static site generation purposes

### Demo link
https://coloshword.github.io/NetLogo-redesign/
