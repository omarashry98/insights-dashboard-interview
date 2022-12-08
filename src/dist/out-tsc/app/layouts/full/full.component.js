import { __decorate, __metadata } from "tslib";
import { Component } from "@angular/core";
import { Router } from "@angular/router";
//declare var $: any;
let FullComponent = class FullComponent {
    constructor(router) {
        this.router = router;
        this.isCollapsed = false;
        this.innerWidth = 0;
        this.showMobileMenu = false;
        this.expandLogo = false;
    }
    Logo() {
        this.expandLogo = !this.expandLogo;
    }
    ngOnInit() {
        if (this.router.url === "/") {
            this.router.navigate(["/dashboard"]);
        }
    }
};
FullComponent = __decorate([
    Component({
        selector: "app-full-layout",
        templateUrl: "./full.component.html",
        styleUrls: ["./full.component.scss"],
    }),
    __metadata("design:paramtypes", [Router])
], FullComponent);
export { FullComponent };
//# sourceMappingURL=full.component.js.map