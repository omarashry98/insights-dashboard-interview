import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
let NavigationComponent = class NavigationComponent {
    constructor(modalService) {
        this.modalService = modalService;
        this.config = {};
    }
    ngAfterViewInit() { }
};
NavigationComponent = __decorate([
    Component({
        selector: 'app-navigation',
        templateUrl: './navigation.component.html'
    }),
    __metadata("design:paramtypes", [NgbModal])
], NavigationComponent);
export { NavigationComponent };
//# sourceMappingURL=navigation.component.js.map