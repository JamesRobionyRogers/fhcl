<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
<!-- [![Contributors][contributors-shield]][contributors-url] [![Forks][forks-shield]][forks-url] [![Stargazers][stars-shield]][stars-url] [![Issues][issues-shield]][issues-url] [![MIT License][license-shield]][license-url] -->


<!-- PROJECT LOGO -->
<br />
<p align="center">
    <h1 align="center"> FHCL Fraser Hyde Contracting Limited </h1>
    <!-- <h6 align="center">2024 - 2025</h6> -->

  <p align="center">
    FHCL is a civil contracting company that specialises in demolition, earthworks, retaining walls and piling, forestry roading, and vegetation management, operating out of the Wellington region of New Zealand."    
  <br />
  </p>
</p>

___


## Overview 

This repository contains the source code for the FHCL website. This static site is built using React.js and is designed to be responsive, ensuring a seamless user experience across various devices. The site showcases the company's past projects, services, process they follow and provides contact information for potential clients.

Starting the project off involved drafting up basic wireframes and mockups to visualise the layout and functionality of the website. This process helped in identifying the key sections and features that needed to be implemented. From here I began developing the website using React.js. The site is structured into components, each representing a different section of the website, such as the header, footer, and project listings.

Finally the website was deployed using Github Pages and made accessible to the public via their domain [fhcl.nz](fhcl.nz). The deployment process involved configuring the DNS records, optimising the sites assets for performance, and improving SEO via meta tags and structured data.

## Built With

* **Build Tool:** [Vite](https://vitejs.dev/)
* **Framework:** [React.js](https://reactjs.org) 
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)

## File Tree 
- `docs` - Contains the build files for the website. Github Pages uses this folder to serve the website.  
- `public` - Contains static assets such as the websites favicon.
- `src/assets` - Contains images and other assets used in the website.
- `src/components` - Contains the React components used in the website.
- `src/sections` - Contains the sections of the website, such as the landing, project, services, etc.


### Running Locally

1. After cloning the repo, install all npm dependencies
```sh
npm install
```
2. Run the app in development mode 
```sh
npm run dev
```
   Open [http://localhost:5173/](http://localhost:5173/) to view it in your browser. 

### Building for Production
To build the app for production, run the following command:
```sh
npm run build
```
This will create a `docs` folder containing the production-ready files. You can then deploy this folder to a web server or hosting service.

> [!NOTE]  
> Ensure the file 'CNAME' is present in the `docs` folder. This file contains the custom domain name for the website, which is `fhcl.nz`. If you are deploying to a different domain, you will need to update this file accordingly.

<!-- USAGE EXAMPLES -->
## View Project

<div align="center">
   <img style="width: 100%" src="https://github.com/user-attachments/assets/e51a705c-cc32-4a6c-a387-ebcdcba7041e">
</div>



<!-- Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources. -->

<!-- ## Further Development
Throughout the project I have been tracking features and firther development using Jira. Here are some of the features I am yet to work on:

- [ ] Implement animations using [Framer Motion](https://www.framer.com/motion/?utm_source=google&utm_medium=adwords&utm_campaign=TW-WW-All-GS-UA-Traffic-20190326-Brand.Bmm_) 
- [ ] Use Dev.to API to display blog posts 
- [ ] Migrate to Typescript - Here is a [blog post](https://www.sitepoint.com/how-to-migrate-a-react-app-to-typescript/) to help -->









<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/jamisbuggerlugs/Spaced-Repitition-Software-Website.svg?style=flat-square
[contributors-url]: https://github.com/JamisBuggerlugs/Spaced-Repitition-Software-Website/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/JamisBuggerlugs/Spaced-Repitition-Software-Website.svg?style=flat-square
[forks-url]: https://github.com/JamisBuggerlugs/Spaced-Repitition-Software-Website/network/members
[stars-shield]: https://img.shields.io/github/stars/JamisBuggerlugs/Spaced-Repitition-Software-Website.svg?style=flat-square
[stars-url]: https://github.com/JamisBuggerlugs/Spaced-Repitition-Software-Website/stargazers
[issues-shield]: https://img.shields.io/github/issues/JamisBuggerlugs/Spaced-Repitition-Software-Website.svg?style=flat-square
[issues-url]: https://github.com/JamisBuggerlugs/Spaced-Repitition-Software-Website/issues
[license-shield]: https://img.shields.io/github/license/JamisBuggerlugs/Spaced-Repitition-Software-Website.svg?style=flat-square
[license-url]: https://github.com/JamisBuggerlugs/Spaced-Repitition-Software-Website/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/james-robiony-rogers-447b28237/
[product-screenshot]: imgs/readme-assets/desktop-home-light.png
