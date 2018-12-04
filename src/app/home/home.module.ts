import {NgModule } from '@angular/core';
import {CommonModule } from '@angular/common';
import {HomeRoutes} from './home.routes';
import {HomeService} from './home.service';
import {HomeComponent} from './home.component';
import {CalendarModule, DropdownModule, SharedModule} from 'primeng/primeng';
import {FormsModule} from '@angular/forms';
import {ScrollToModule} from 'ng2-scroll-to';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HomeRoutes,
        DropdownModule,
        SharedModule,
        CalendarModule,
        ScrollToModule
    ],
    declarations: [
        HomeComponent
    ],
    providers: [
        HomeService
    ]
})

export class HomeModule { }
