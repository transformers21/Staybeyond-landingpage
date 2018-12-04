import {Routes, RouterModule } from '@angular/router';
import {PartnerComponent} from './partner.component';

export const partner_routing: Routes = [
    {
        path: '',
        component: PartnerComponent,
    }
];

export const PartnerRoutes = RouterModule.forChild(partner_routing);
