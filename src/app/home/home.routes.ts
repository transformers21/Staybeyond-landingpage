import {Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home.component';

export const home_routing: Routes = [
    {
        path: '',
        component: HomeComponent,
    }
];

export const HomeRoutes = RouterModule.forChild(home_routing);


