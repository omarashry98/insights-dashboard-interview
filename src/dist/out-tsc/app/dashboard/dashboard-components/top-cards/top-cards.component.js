import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { topcards } from './top-cards-data';
let TopCardsComponent = class TopCardsComponent {
    constructor() {
        this.topcards = topcards;
    }
    ngOnInit() {
    }
};
TopCardsComponent = __decorate([
    Component({
        selector: 'app-top-cards',
        templateUrl: './top-cards.component.html'
    }),
    __metadata("design:paramtypes", [])
], TopCardsComponent);
export { TopCardsComponent };
//# sourceMappingURL=top-cards.component.js.map