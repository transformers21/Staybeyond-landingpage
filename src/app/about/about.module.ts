import {NgModule } from '@angular/core';
import {CommonModule } from '@angular/common';
import {CalendarModule, DropdownModule, SharedModule} from 'primeng/primeng';
import {FormsModule} from '@angular/forms';
import {AboutComponent} from './about.component';
import {AboutService} from './about.service';
import {AboutRoutes} from './about.routes';

@NgModule({
    imports: [
        CommonModule,
        AboutRoutes,
        FormsModule,
        DropdownModule,
        SharedModule,
        CalendarModule
    ],
    declarations: [
        AboutComponent
    ],
    providers: [
        AboutService
    ]
})

export class AboutModule { }
