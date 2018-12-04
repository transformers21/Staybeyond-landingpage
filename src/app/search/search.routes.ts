import {Routes, RouterModule } from '@angular/router';
import {SearchComponent} from './search.component';


export const search_routing: Routes = [
    {
        path: '',
        component: SearchComponent,
    }
];

export const SearchRoutes = RouterModule.forChild(search_routing);


