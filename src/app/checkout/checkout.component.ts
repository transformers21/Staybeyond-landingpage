import { Component, OnInit } from '@angular/core';
import {CheckoutService} from './checkout.service';
import {CommunicationService} from '../app.communication';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
    submitted: boolean = false;
    displayPopup: boolean = false;
    Status: boolean = true;
    step: number = 1;

    constructor(private checkoutService: CheckoutService, private communication: CommunicationService) { }

    onSubmit(): void {
      this.submitted = true;
      this.displayPopup = true;
      this.step = 1;
    }

    stepGo(step): void {
      this.step = step;
    }

    ngOnInit(): void {
        this.communication.trackApplicationStatus.next('2');
    }

}
