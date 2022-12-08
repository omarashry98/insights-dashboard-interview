import { __decorate, __metadata, __param } from "tslib";
import { Component, Input, Inject, ViewEncapsulation } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { DOCUMENT } from '@angular/common';
let SpinnerComponent = class SpinnerComponent {
    constructor(router, document) {
        this.router = router;
        this.document = document;
        this.isSpinnerVisible = true;
        this.backgroundColor = 'rgba(0, 115, 170, 0.69)';
        this.router.events.subscribe(event => {
            if (event instanceof NavigationStart) {
                this.isSpinnerVisible = true;
            }
            else if (event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError) {
                this.isSpinnerVisible = false;
            }
        }, () => {
            this.isSpinnerVisible = false;
        });
    }
    ngOnDestroy() {
        this.isSpinnerVisible = false;
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], SpinnerComponent.prototype, "backgroundColor", void 0);
SpinnerComponent = __decorate([
    Component({
        selector: 'app-spinner',
        template: `<div class="preloader" *ngIf="isSpinnerVisible">
        <div class="spinner">
          <div class="double-bounce1"></div>
          <div class="double-bounce2"></div>
        </div>
    </div>`,
        encapsulation: ViewEncapsulation.None
    }),
    __param(1, Inject(DOCUMENT)),
    __metadata("design:paramtypes", [Router, Document])
], SpinnerComponent);
export { SpinnerComponent };
//# sourceMappingURL=spinner.component.js.map