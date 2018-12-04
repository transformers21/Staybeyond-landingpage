import {Routes, RouterModule } from '@angular/router';
import {CityComponent} from './city.component';

export const city_routing: Routes = [
    {
        path: '',
        component: CityComponent,
    }
];

export const CityRoutes = RouterModule.forChild(city_routing);


