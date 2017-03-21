import { Component } from '@angular/core';

import { Category } from './../../models/category';
import { CategoryService } from './../../core/category.service';

declare var require:any;

@Component({
    selector: 'categories-page',
    template:require('./categories-page.component.pug').toString()
})

export class CategoriesPageComponent {
    categories: Category[];

    constructor(private categoryService: CategoryService) {
        this.categoryService.getCategories()
            .subscribe(categories => {
                this.categories = categories;
            });
    }
}
