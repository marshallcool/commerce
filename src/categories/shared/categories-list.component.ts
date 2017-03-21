import { Component, OnInit, trigger, state, style, transition, animate, keyframes } from '@angular/core';

import { Category } from './../../models/category';
import { CategoryService } from './../../core/category.service';

declare var require: any;

@Component({
    selector: 'categories-list',
    template: require('./categories-list.component.pug').toString(),
    animations: [
        trigger('side', [
            state('inactive', style({
                transform: 'translateX(-100%)',
                display: 'block'
            })),
            state('active', style({
                transform: 'translateX(0)',
                display: 'block'
            })),
            transition('void => active', [
                animate(700, keyframes([
                    style({ display: 'block', opacity: 0, transform: 'translateX(-100%)', offset: 0 }),
                    style({ display: 'block', opacity: 1, transform: 'translateX(0)', offset: 1.0 })
                ]))
            ]),
            transition('active => inactive', animate('200ms ease-out'))
        ])
    ]
})

export class CategoriesListComponent {
    roomState: string = "active";
    categories: Category[];

    constructor(private categoryService: CategoryService) {
        this.categoryService.getCategories()
            .subscribe(categories => {
                this.categories = categories;
            });
    }
    ngOnInit() {
    }
}
