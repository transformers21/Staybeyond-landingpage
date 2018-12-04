import {NgModule } from '@angular/core';
import {CommonModule } from '@angular/common';
import {CityService} from './city.service';
import {CityComponent} from './city.component';
import {CalendarModule, DropdownModule, SharedModule} from 'primeng/primeng';
import {FormsModule} from '@angular/forms';
import {CityRoutes} from './city.routes';

@NgModule({
    imports: [
        CommonModule,
        CityRoutes,
        FormsModule,
        DropdownModule,
        SharedModule,
        CalendarModule
    ],
    declarations: [
        CityComponent
    ],
    providers: [
        CityService
    ]
})

export class CityModule { }
