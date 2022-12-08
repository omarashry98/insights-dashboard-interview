import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard.component";
import { FeedsComponent } from "./dashboard-components/feeds/feeds.component";
import { TopCustomersComponent } from "./dashboard-components/top-customers/top-customers.component";
import { TopCardsComponent } from "./dashboard-components/top-cards/top-cards.component";
import { BlogCardsComponent } from "./dashboard-components/blog-cards/blog-cards.component";
import { MonthlySalesComponent } from "./dashboard-components/monthly-sales/monthly-sales.component";
import { HttpClientModule } from "@angular/common/http";
import { ApiService } from '../services/api.service';
import { MychartComponent } from '../mychart/mychart.component';



const routes: Routes = [
  {
    path: "",
    data: {
      title: "Dashboard",
      urls: [{ title: "Dashboard", url: "/dashboard" }, { title: "Dashboard" }],
    },
    component: DashboardComponent,
  },
];

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes),
  ],
  providers: [ApiService],
  declarations: [
    DashboardComponent,
    MonthlySalesComponent,
    FeedsComponent,
    MychartComponent,
    TopCustomersComponent,
    TopCardsComponent,
    BlogCardsComponent
  ],
})
export class DashboardModule {}
