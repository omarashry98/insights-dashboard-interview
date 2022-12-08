import { FullComponent } from './layouts/full/full.component';
export const Approutes = [
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
    {
        path: '**',
        redirectTo: '/starter'
    }
];
//# sourceMappingURL=app-routing.module.js.map