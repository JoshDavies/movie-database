# Movie Database

A Font End React App with SCSS, TypeScript and MobX. 
  
This project was cloned from my previous project: [Theme-builder](https://github.com/JoshDavies/theme-builder) in order to continue working on it but to take it in a new direction and shift focus on to adding content via an API.

The MobX library has been added to the project to handle state management. I have used MobX before, however, they previously encouraged the use of decorators like ```@observable```. In MobX 6, they have now chosen to move away from them for maximum compatibility with standard JavaScript. [MobX Docs.](https://mobx.js.org/installation.html) It is still possible to enable decorators but they are no longer recommended for new projects. So I am interested to try out the use of ```makeObservable``` instead.  
  
To give the app interesting content and to demo fetching from an API, I'm using [The Move Database](https://www.themoviedb.org/).
   
## Project Objectives:   
- Learn new syntax for MobX 6.  
- Fetch data from [the Movie Database's free API](https://developers.themoviedb.org/3/getting-started/introduction)
  
----------------
## Tech  
- JS / TypeScript  
- React  
- SCSS + Bootstrap  
- Google Fonts  
- Font Awesome 5 icon library    
- MobX 6   
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
you will need to claim an API from [the Movie Database's free API](https://developers.themoviedb.org/3/getting-started/introduction)   
Once you have your unique key, create a ```.env``` file at the top level of the project. 
the key must be named ```REACT_APP_API_KEY=```  
I have listed this file to be ignored by git to avoid it being uploaded to GitHub.  
Please be aware that the key will still be visable in the build files and in the console network tab when deployed. There is no way to securely store a secret API key in the frontend. 

-----------
## Project Review  

TBC

