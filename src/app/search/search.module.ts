import {NgModule } from '@angular/core';
import {CommonModule } from '@angular/common';
import {SearchRoutes} from './search.routes';
import {FormsModule} from '@angular/forms';
import {CalendarModule, DropdownModule, SharedModule} from 'primeng/primeng';
import {SearchComponent} from './search.component';
import {SearchService} from './search.service';
import {AgmCoreModule} from '@agm/core';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SearchRoutes,
        DropdownModule,
        SharedModule,
        CalendarModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyBEG1FgC8_SBEojNqohIA4IvhWQOyVQnUM'
        })
    ],
    declarations: [
        SearchComponent
    ],
    providers: [
        SearchService
    ]
})

export class SearchModule { }
