# Movie Database

A Font End React App with MobX, TypeScript and SCSS. To give the app interesting content and to demo fetching from an API, I'm using a third party API from [The Move Database](https://www.themoviedb.org/). The App also supports both light and dark themes.  
  
<img width="480" height="270" src="https://media.giphy.com/media/lg5L4JEXmC67J6VhBr/giphy.gif">  
  
This project was cloned from my previous project: [Theme-builder](https://github.com/JoshDavies/theme-builder) in order to continue working on it but to take it in a new direction and shift focus to fetch and displaying content from an API.

The MobX library has been added to the project to handle state management. I have used MobX before, however, they previously encouraged the use of decorators like ```@observable```. In MobX 6, they have now chosen to move away from them for maximum compatibility with standard JavaScript. [MobX Docs.](https://mobx.js.org/installation.html) It is still possible to enable decorators but they are no longer recommended for new projects. So I am interested to try out the use of ```makeObservable``` instead.  
   
## Project Objectives:   
- Learn new syntax for MobX 6.  
- Fetch and display data from [the Movie Database's free API](https://developers.themoviedb.org/3/getting-started/introduction)  
- Build reusable React components to keep the code DRY.    
----------------
## Tech  
- React  
- MobX   
- JS / TypeScript  
- SCSS + Bootstrap  
- Google Fonts  
- Font Awesome 5 icon library    
- [react-circular-progressbar](https://www.npmjs.com/package/react-circular-progressbar)  
- [reactstrap Modal](https://reactstrap.github.io/components/modals/)  

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
### API Key
To populate the app, you will first need to claim a free API from [The Movie Database](https://developers.themoviedb.org/3/getting-started/introduction).  
Once you have your unique key, create a ```.env``` file at the top level of the project. 
the key must be assigned to ```REACT_APP_API_KEY=```  
- I have listed this file to be ignored by git to avoid it being uploaded to GitHub. Secret keys should not be stored on GitHub (even private repositories).    
- Please be aware when deploying a front end app that the key will still be visible in the build files and in the console network tab when deployed. There is no way to securely store a secret API key in the frontend.  

-----------
## Project Review  
I found the MobX syntax changes easy to adjust to and built stores to keep the JS logic separate from the React code (separation of concerns). It was great working with The Movie DB's APIs as they are well documented and the JSON keys are descriptive so it was easy to pick up. Although, keeping my unique API key secure means I can't simply deploy the app to GitHub Pages. I will have to do further research or look at deploying on Heroku.  
   
I used 2 third-party component libraries, adding custom styling to fit the layout and theme of the app. Using a library can speed up development and the components are well tested by the community. However, it increases the project's dependencies and footprint. It can also be difficult to customize or add features to them. I prefer creating my own components to ensure compatibility, code visibility and customization. However, for complex graphs, it helps maintian sprint productivity.  
  
### Ideas to develop the project further  
- The Movie DB has more API's I could add e.g. newest releases or movie search functionality.  
- Add a favourits / watch list that users can add or remove films to.
- Currently, a failure with the API is logged to the console. Instead build an Error modal for better user experience.  
- Build a loading wire frame to display if the user has slow network speeds.  
