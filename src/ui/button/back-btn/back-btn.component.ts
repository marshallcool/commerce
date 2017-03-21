import { Component } from '@angular/core';
import { Location } from '@angular/common';

declare var require: any;

@Component({
    selector: 'back-btn',
    template: require('./back-btn.component.pug').toString()
})
export class BackBtnComponent {
    constructor(private location: Location) { }
    back() {
        this.location.back();
    }
}