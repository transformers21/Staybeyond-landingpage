import {Routes, RouterModule} from '@angular/router';
import {MainLayoutComponent} from './shared/app-layouts/main-layout.component';

export const AppRoutes: Routes = [
    {
        path: '',
        component: MainLayoutComponent,
        children: [
            {path: '', redirectTo: '/home', pathMatch: 'full'},
            {path: 'home', loadChildren: 'app/home/home.module#HomeModule'},
            {path: 'city', loadChildren: 'app/city/city.module#CityModule'},
            {path: 'partner', loadChildren: 'app/partner/partner.module#PartnerModule'},
            {path: 'about', loadChildren: 'app/about/about.module#AboutModule'},
            {path: 'property', loadChildren: 'app/property/property.module#PropertyModule'},
            {path: 'search', loadChildren: 'app/search/search.module#SearchModule'},
            {path: 'checkout', loadChildren: 'app/checkout/checkout.module#CheckoutModule'}
        ]
    },
    { path: '**', redirectTo: ''}

];


export const routing = RouterModule.forRoot(AppRoutes);
