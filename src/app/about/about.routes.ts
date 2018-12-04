import {Routes, RouterModule } from '@angular/router';
import {AboutComponent} from './about.component';

export const about_routing: Routes = [
    {
        path: '',
        component: AboutComponent,
    }
];

export const AboutRoutes = RouterModule.forChild(about_routing);