import { makeObservable, observable, action, computed } from "mobx"

class Store {
    currentTheme: string = 'theme-light';

    constructor() {
        makeObservable(this, {
            isDarkTheme: computed,
            currentTheme: observable,
            toggleTheme: action,
        })
    }

    public get isDarkTheme(): boolean {
        if (this.currentTheme === 'theme-light') return false; 
        return true;
    }

    public toggleTheme():void {
        document.documentElement.className = '';
        if (this.currentTheme === 'theme-light') {
          document.documentElement.classList.add(`theme-${'dark'}`);
          localStorage.setItem('theme', 'dark');
          this.currentTheme = 'theme-dark'
        } else {
          document.documentElement.classList.add(`theme-${'light'}`);
          localStorage.setItem('theme', 'light');
          this.currentTheme = 'theme-light';
        }
    }

    public handleColorTheme = (): void => {  
        const prefersColorScheme = window.matchMedia("(prefers-color-scheme: dark)");
        const localStorageTheme = localStorage.getItem("theme");
        if (localStorageTheme) {
            localStorageTheme === "dark" ? this.setColorTheme('dark') : this.setColorTheme('light');
        } else {
            (prefersColorScheme.matches) ? this.setColorTheme('dark') : this.setColorTheme('light');
        }
    };
  
    public setColorTheme = (theme: string): void => {
        document.documentElement.className = '';
        document.documentElement.classList.add(`theme-${theme}`);
    };
    
}

const store = new Store();
export default store;