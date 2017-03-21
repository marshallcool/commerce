import { Component } from '@angular/core';

declare var require: {
	<T>(path: string): T;
	(paths: string[], callback: (...modules: any[]) => void): void;
	ensure: (paths: string[], callback: (require: <T>(path: string) => T) => void) => void;
};

@Component({
  selector: 'my-app',
  template: `
    <loader-bar></loader-bar>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  
}