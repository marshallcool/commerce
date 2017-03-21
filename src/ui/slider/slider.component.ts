import { Component } from '@angular/core';

declare var require: any;

@Component({
    selector: 'slider',
    template: require('./slider.component.pug').toString()
})

export class SliderComponent {

    constructor() {}
}
