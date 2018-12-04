import { Component, OnInit, ViewChild } from '@angular/core';
import {SelectItem} from 'primeng/primeng';
import {SliderLightClass} from '../app.classes';
import {CommunicationService} from '../app.communication';
import {CityService} from './city.service';
import {forEach} from "@angular/router/src/utils/collection";

@Component({
    selector: 'app-city',
    templateUrl: './city.component.html',
    styleUrls: ['./city.component.scss']
})
export class CityComponent implements OnInit {

    cities: SelectItem[];
    selectedCity: any;
    checkinDate: Date;
    checkoutDate: Date;
    guestNumber: string;
	@ViewChild('nameInput') nameInput;


	sliderImages: SliderLightClass[];
    imageLocation: string = 'assets/images/';

    constructor(private cityService: CityService, private communication: CommunicationService) { }

    ngOnInit(): void {
        this.communication.trackApplicationStatus.next('2');

        this.cityService.requestGalleryCities().subscribe(
            data => {
                this.cities = data.CitiesGallery;
            },
            error => {
                console.log('Error has happened');
            });

        this.cityService.requestSliderData().subscribe(
            data => {
                this.sliderImages = data.SliderData;
            },
            error => {
                console.log('Error has happened');
            });

    }

}
