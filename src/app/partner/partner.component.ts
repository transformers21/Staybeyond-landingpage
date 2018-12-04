import { Component, OnInit } from '@angular/core';
import {CommunicationService} from '../app.communication';
import {PartnerService} from './partner.service';
import {SliderClass} from '../app.classes';
import {HomeService} from '../home/home.service';

@Component({
  selector: 'app-partner',
  templateUrl: './partner.component.html',
  styleUrls: ['./partner.component.scss']
})
export class PartnerComponent implements OnInit {

  sliderImages: SliderClass[];
  imageLocation: string = 'assets/images/';


    showHideFaq: string[] = ['faq-answer inactive', 'faq-answer inactive', 'faq-answer inactive', 'faq-answer inactive', 'faq-answer inactive', 'faq-answer inactive', 'faq-answer inactive', 'faq-answer inactive', 'faq-answer inactive', 'faq-answer inactive', 'faq-answer inactive', 'faq-answer inactive', 'faq-answer inactive']
    showBlockColor: string[] = ['single-faq', 'single-faq', 'single-faq', 'single-faq', 'single-faq', 'single-faq', 'single-faq', 'single-faq', 'single-faq', 'single-faq', 'single-faq', 'single-faq', 'single-faq'];


    constructor(private partnerService: PartnerService, private communication: CommunicationService) {}

  ngOnInit(): void {
    setTimeout(function(): any {
      this.communication.trackApplicationStatus.next('2');
    }.bind(this), 10);


    this.partnerService.requestSliderData().subscribe(
        data => {
          this.sliderImages = data.SliderData;
        },
        error => {
          console.log('Error has happened');
        });
  }

    showFaqDescription(_ID: number): void {
        if (this.showHideFaq[_ID] === 'faq-answer active') {
            this.showHideFaq[_ID] = 'faq-answer inactive';
            this.showBlockColor[_ID] = 'single-faq';
            return;
        }

        this.showHideFaq = ['faq-answer inactive', 'faq-answer inactive', 'faq-answer inactive', 'faq-answer inactive', 'faq-answer inactive', 'faq-answer inactive', 'faq-answer inactive', 'faq-answer inactive', 'faq-answer inactive', 'faq-answer inactive', 'faq-answer inactive', 'faq-answer inactive', 'faq-answer inactive']
        this.showBlockColor = ['single-faq', 'single-faq', 'single-faq', 'single-faq', 'single-faq', 'single-faq', 'single-faq', 'single-faq', 'single-faq', 'single-faq', 'single-faq', 'single-faq', 'single-faq'];

        this.showHideFaq[_ID] = 'faq-answer active';
        this.showBlockColor[_ID] = 'single-faq-activated';
    }

}
