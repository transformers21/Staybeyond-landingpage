import {NgModule } from '@angular/core';
import {CommonModule } from '@angular/common';
import {PartnerComponent} from './partner.component';
import {PartnerService} from './partner.service';
import {CalendarModule, DropdownModule, SharedModule} from 'primeng/primeng';
import {PartnerRoutes} from './partner.routes';
import {FormsModule} from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        PartnerRoutes,
        DropdownModule,
        SharedModule,
        CalendarModule
    ],
    declarations: [
        PartnerComponent
    ],
    providers: [
        PartnerService
    ]
})

export class PartnerModule { }
