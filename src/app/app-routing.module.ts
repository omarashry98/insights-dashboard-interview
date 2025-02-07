import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MychartComponent } from "./mychart/mychart.component";
import { FullComponent } from './layouts/full/full.component';

export const Approutes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'component',
        loadChildren: () => import('./component/component.module').then(m => m.ComponentsModule)
      }
    ]
  },
  {path: "chart", component: MychartComponent},
  {
    path: '**',
    redirectTo: '/starter'
  }
];
