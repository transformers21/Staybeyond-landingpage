import { Component, OnInit } from '@angular/core';
import {CommunicationService} from '../app.communication';
import {SliderLightClass} from '../app.classes';
import {PropertyService} from "./property.service";

@Component({
    selector: 'app-property',
    templateUrl: './property.component.html',
    styleUrls: ['./property.component.scss']
})
export class PropertyComponent implements OnInit {


    title: string = 'StayBeyond';
    lat: number = 51.678418;
    lng: number = 7.809007;
    zoom: number = 14;

    checkinDate: string;
    checkoutDate: string;
    adultNumber: string;
    childrenNumber: string;

    sliderImages: SliderLightClass[];
    imageLocation: string = 'assets/images/';

    constructor(private propertyService: PropertyService,private communication: CommunicationService) { }

    ngOnInit(): void {
        setTimeout(function(): any {
            this.communication.trackApplicationStatus.next('2');
        }.bind(this), 10);
        this.propertyService.requestSliderData().subscribe(
            data => {
                console.log(data);
                this.sliderImages = data.SliderData;
            },
            error => {
                console.log('Error has happened');
            });
    }

}
