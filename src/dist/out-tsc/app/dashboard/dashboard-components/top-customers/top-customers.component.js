import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { TopCustomers } from './top-customers-data';
let TopCustomersComponent = class TopCustomersComponent {
    constructor() {
        this.topCustomers = TopCustomers;
    }
    ngOnInit() {
    }
};
TopCustomersComponent = __decorate([
    Component({
        selector: 'app-top-customers',
        templateUrl: './top-customers.component.html'
    }),
    __metadata("design:paramtypes", [])
], TopCustomersComponent);
export { TopCustomersComponent };
//# sourceMappingURL=top-customers.component.js.map