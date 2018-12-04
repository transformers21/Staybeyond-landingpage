import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutes} from './app.routes';
import 'rxjs/add/operator/toPromise';
import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {AppService} from './app.service';
import {LayoutModule} from './shared/layout.module';
import {SharedModule} from 'primeng/components/common/shared';
import {HttpModule} from '@angular/http';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CommunicationService} from './app.communication';

@NgModule({
    imports: [
        RouterModule.forRoot(AppRoutes, {useHash: true}),
        BrowserModule,
        HttpModule,
        FormsModule,
        LayoutModule,
        SharedModule,
        BrowserAnimationsModule
    ],
    declarations: [
        AppComponent
    ],
    providers: [
        AppService,
        CommunicationService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }

