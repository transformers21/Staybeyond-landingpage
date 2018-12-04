import {Routes, RouterModule } from '@angular/router';
import {CheckoutComponent} from './checkout.component';

export const about_routing: Routes = [
    {
        path: '',
        component: CheckoutComponent,
    }
];

export const CheckoutRoutes = RouterModule.forChild(about_routing);