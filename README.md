# Theme Builder

A Font End App with multiple color themes. This project is a React App with SCSS and TypeScript. Although, this Project is intended as a small project, the folder structure is setup to be scalable for larger projects, including an icon library and bootstrap.  
  
Deployed to GitHub pages: [Visit live Webpage](https://joshdavies.github.io/theme-builder/)  *please note, this is currently a work in progress.*    
   
## Project Objectives:   
The main goal of this project is to learn more complex scss and use it to deliver a front end with multiple color themes.    
  
Maintainable - The color themes are encapsulated in their own files, with different levels of abstraction; a color can be replaced in the theme or a certain use case for that color can be swapped, all independently of other themes. This was an important criteria for me as light and dark modes are not simply mirror opposites.  
  
Dry - The code repeats itself as little as possible, making it easy to amend styling without having to go through every styling file. Whilst it’s not a massive challenge for small projects it does create a legacy challenge as projects grow so it’s best to implement a solution from the beginning.  
  
Scalable - There are currently 2 MVP themes (light & dark) but the project allows for additional themes to be added (at a later date) without having to restructure the existing code. This is useful when re-branding or having to support multiple brands.  
  
Dynamic - The App will match the users preferred OS color scheme. However, it is possible to overwrite this with a click of a button. Changing the color scheme saves the users preference to local storage. This also ensures that the color scheme persists after a page refresh.  
  
----------------
## Tech  
- JS / TypeScript  
- React  
- SCSS + Bootstrap  
- Google Fonts  
- Font Awesome 5 icons    

----------------
## Quickstart
Clone this repo to your local drive and open in your editor of choice.  

To Launch the app locally:  
```bash
# From the /theme-builder repository:
> npm install
> npm run build
> npm start
```
  
-----------
## Project Review  

Overall, I am pleased with this design pattern as it passes all the criteria I set above. Once setup, I found it easy to edit a theme’s color or application as it is controlled by a single file.   
  
To give a brief description, this SCSS Mixin:  
```SCSS
.primaryButton {  
	  @include theme-aware('border-color', 'button-primary-border');  
}  
```
Compiles into this CSS:  
```CSS
.theme-light .primaryButton {  
    border-color: #81c754;  
}  
.theme-dark .primaryButton {  
    border-color: #BB86FC;  
}  
```
Therefore, this approach becomes increasingly beneficial for App's with many color themes.  
  
The main disadvantage is the additional effort it takes to set up both light & dark theme requirements have to be taken into consideration at the same time. This meant that the themes needed 15 variables for the button component alone. Potentially, this could become verbose for larger projects, but perhaps it would be possible for components to share variables once patterns start to emerge in the themes.  
  
From this project I learnt to use SCSS to write DRY code and more about styling for dark themes. The next step for this project would be to add a state management tool and implement a test library. I could also or fetch from a public API to give the App some interesting content and give me a reason to expand the component library or add React-router for multiple pages.  
  
However, I want to be able to try / experiment with different programs & API’s so I think the project is at a good stopping point where I am able to fork off it and take it in different directions.  

