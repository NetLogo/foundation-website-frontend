## NetLogo Website Frontend
This is the frontend repository of the new NetLogo website.
The site is live at https://www.netlogo.org/
The backend is hosted at https://backend.netlogo.org/

### Architecture
We use [Astro](https://astro.build/) to enable generate a static website from this repository.
This enables us to use React features, while keeping the website entirely static.

### Related Documentation
* How to create more static or dynamic pages?
https://docs.astro.build/en/guides/routing/

## How to Run Locally
This section assumes that you have already cloned this project to your machine.

### Requirements
To run the project, you must have Node.js and npm installed on your computer. Installing Node.js will automatically install npm. You can download Node.js from the following link:

[Node.js Downloads](https://nodejs.org/en/download/package-manager)

To verify that Node.js and npm are installed successfully, run the following commands in your terminal. They should output version numbers:
```
node -v
npm -v
```
### Installing Dependencies
Before running the project locally, you need to install the required npm packages. Navigate to the project folder using the terminal and run:

```
npm install
```
This command will install all the dependencies specified in the package.json file.

### Running the Project Locally
Once the requirements are installed and dependencies are set up, you can run the project locally by executing the following command in the project folder:

```
npm run dev
```
This will start the development server and provide local links where you can access the project in your browser. Simply click one of the links to view your local instance of the website.
