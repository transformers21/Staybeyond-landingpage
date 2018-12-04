import {Routes, RouterModule } from '@angular/router';
import {PropertyComponent} from './property.component';

export const property_routing: Routes = [
    {
        path: '',
        component: PropertyComponent,
    }
];

export const PropertyRoutes = RouterModule.forChild(property_routing);


