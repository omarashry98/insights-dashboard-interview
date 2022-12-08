import { __decorate } from "tslib";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard.component";
import { FeedsComponent } from "./dashboard-components/feeds/feeds.component";
import { TopCustomersComponent } from "./dashboard-components/top-customers/top-customers.component";
import { TopCardsComponent } from "./dashboard-components/top-cards/top-cards.component";
import { BlogCardsComponent } from "./dashboard-components/blog-cards/blog-cards.component";
const routes = [
    {
        path: "",
        data: {
            title: "Dashboard",
            urls: [{ title: "Dashboard", url: "/dashboard" }, { title: "Dashboard" }],
        },
        component: DashboardComponent,
    },
];
let DashboardModule = class DashboardModule {
};
DashboardModule = __decorate([
    NgModule({
        imports: [
            FormsModule,
            ReactiveFormsModule,
            CommonModule,
            RouterModule.forChild(routes),
        ],
        declarations: [
            DashboardComponent,
            FeedsComponent,
            TopCustomersComponent,
            TopCardsComponent,
            BlogCardsComponent
        ],
    })
], DashboardModule);
export { DashboardModule };
//# sourceMappingURL=dashboard.module.js.map