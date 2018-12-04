import {NgModule } from '@angular/core';
import {CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {CheckoutComponent} from './checkout.component';
import {CheckoutService} from './checkout.service';
import {CheckoutRoutes} from './checkout.routes';

@NgModule({
    imports: [
        CommonModule,
        CheckoutRoutes,
        FormsModule,
    ],
    declarations: [
        CheckoutComponent
    ],
    providers: [
        CheckoutService
    ]
})

export class CheckoutModule { }
