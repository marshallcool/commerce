import { Component, OnInit } from '@angular/core';

declare var require: any;

@Component({
    selector: 'home-page',
    template: require('./home-page.component.pug').toString(),
    styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}