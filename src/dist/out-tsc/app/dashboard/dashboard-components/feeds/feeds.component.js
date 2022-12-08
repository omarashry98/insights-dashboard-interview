import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { Feeds } from './feeds-data';
let FeedsComponent = class FeedsComponent {
    constructor() {
        this.feeds = Feeds;
    }
    ngOnInit() {
    }
};
FeedsComponent = __decorate([
    Component({
        selector: 'app-feeds',
        templateUrl: './feeds.component.html'
    }),
    __metadata("design:paramtypes", [])
], FeedsComponent);
export { FeedsComponent };
//# sourceMappingURL=feeds.component.js.map