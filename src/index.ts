import 'core-js';
import 'reflect-metadata';
import 'zone.js/dist/zone';


declare var require:any;
//import 'style.scss';
require("!style-loader!css-loader!sass-loader!./styles/style.scss");

//import 'materialize.js';
require("../node_modules/materialize-css/dist/js/materialize.js");

//import 'bootstrap.scss';
require("!style-loader!css-loader!sass-loader!../node_modules/bootstrap/scss/bootstrap.scss");

//import 'style.css';
require("!style-loader!css-loader!sass-loader!./styles/style.css");

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule }              from './app.module';
platformBrowserDynamic().bootstrapModule(AppModule);