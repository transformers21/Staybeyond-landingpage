import {NgModule } from '@angular/core';
import {CommonModule } from '@angular/common';
import {PropertyRoutes} from './property.routes';
import {FormsModule} from '@angular/forms';
import {CalendarModule, DropdownModule, SharedModule} from 'primeng/primeng';
import {PropertyComponent} from './property.component';
import {PropertyService} from './property.service';
import {AgmCoreModule} from '@agm/core';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        PropertyRoutes,
        DropdownModule,
        SharedModule,
        CalendarModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyBEG1FgC8_SBEojNqohIA4IvhWQOyVQnUM'
        })
    ],
    declarations: [
        PropertyComponent
    ],
    providers: [
        PropertyService
    ]
})

export class PropertyModule { }
