## NetLogo Website Frontend
This is the frontend repository of the new NetLogo website.
Currently, the demo is deployed at https://netlogo.github.io/foundation-website-frontend/
The backend is hosted at https://backend.netlogo.org/

### Architecture
We use [Astro](https://astro.build/) to enable generate a static website from this repository.
This enables us to use React features, while keeping the website entirely static.

### Related Documentation
* How to create more static or dynamic pages?
https://docs.astro.build/en/guides/routing/

## How to Run Locally

This section assumes that you have already cloned this project to your machine

### Requiremnts
To be able to run the project you must have npm and node.js installed on your computer. Installing Node.js should satisfy both requirements. This can be downloaded here:

https://nodejs.org/en/download/package-manager

To verify that node and npm isntalled successfully, run the following command, which should output a software version

```
npm -v
node -v
```

### Installing dependencies
Before trying to run locally, it's necessary to install all the required npm packages for the website. To do this, cd into the project folder and run the following command

```
npm i
```

This command ensures that all the required dependencies for the website are installed.

### Runnning Locally
After gettig all the requirements and installing dependencies, all we need to do to run our project locally is execute the following command in the project folder
```
npm run dev
```  

This will output all the local links that will lead you to your project. You can click on any of the links and you will be directed to your local instance of the website. 