import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ComponentsRoutes } from './component.routing';
let ComponentsModule = class ComponentsModule {
};
ComponentsModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            RouterModule.forChild(ComponentsRoutes),
            FormsModule,
            ReactiveFormsModule,
            NgbModule,
        ],
        declarations: []
    })
], ComponentsModule);
export { ComponentsModule };
//# sourceMappingURL=component.module.js.map