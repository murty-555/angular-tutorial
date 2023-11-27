import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  public theme: boolean = false;
  constructor() { }
  getTheme(){
    return this.theme
  }
  darkTheme(){
    this.theme = true
    return this.theme
  }
  lightTheme(){
    this.theme = false
    return this.theme
  }
}
