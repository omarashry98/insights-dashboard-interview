import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { blogcards } from './blog-cards-data';
let BlogCardsComponent = class BlogCardsComponent {
    constructor() {
        this.blogcards = blogcards;
    }
    ngOnInit() {
    }
};
BlogCardsComponent = __decorate([
    Component({
        selector: 'app-blog-cards',
        templateUrl: './blog-cards.component.html'
    }),
    __metadata("design:paramtypes", [])
], BlogCardsComponent);
export { BlogCardsComponent };
//# sourceMappingURL=blog-cards.component.js.map