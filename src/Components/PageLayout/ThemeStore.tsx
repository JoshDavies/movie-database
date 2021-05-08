import { makeObservable, observable, action, computed } from "mobx"

class Store {
    currentTheme: string = 'theme-light';

    constructor() {
        makeObservable(this, {
            isDarkTheme: computed,
            currentTheme: observable,
            toggleTheme: action,
            setColorTheme: action,
        })
    }

    public get isDarkTheme(): boolean {
        return this.currentTheme === 'theme-dark'; 
    }

    public toggleTheme():void {
        if (this.currentTheme === 'theme-light') {
            localStorage.setItem('theme', 'dark');
            this.setColorTheme('dark');
        } else {
            localStorage.setItem('theme', 'light');
            this.setColorTheme('light');
        }
    }

    public handleColorTheme = (): void => {  
        let prefersColorScheme = window.matchMedia("(prefers-color-scheme: dark)");
        let localStorageTheme = localStorage.getItem("theme");
        if (localStorageTheme) {
            localStorageTheme === "dark" ? this.setColorTheme('dark') : this.setColorTheme('light');
        } else {
            (prefersColorScheme.matches) ? this.setColorTheme('dark') : this.setColorTheme('light');
        }
    };
  
    public setColorTheme = (theme: string): void => {
        document.documentElement.className = '';
        document.documentElement.classList.add(`theme-${theme}`);
        this.currentTheme = `theme-${theme}`
    };
    
}

const store = new Store();
export default store;