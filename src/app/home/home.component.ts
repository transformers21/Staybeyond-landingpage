import { Component, OnInit } from '@angular/core';
import {SelectItem} from 'primeng/primeng';
import {HomeService} from './home.service';
import {CityClass, SliderClass} from '../app.classes';
import {CommunicationService} from '../app.communication';
import {Router} from "@angular/router";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    cities: SelectItem[];
    selectedCity: any;
    checkinDate: Date;
    checkoutDate: Date;
    guestNumber: string;

    galleryCities: CityClass[];
    imageLocation: string = 'assets/images/';

    sliderImages: SliderClass[];
    isHoverActivated: boolean[] = [false, false, false, false, false, false, false, false];

    constructor(private router: Router, private communication: CommunicationService, private homeService: HomeService) {}

    ngOnInit(): void {
        setTimeout(function(): any {
            this.communication.trackApplicationStatus.next('1');
        }.bind(this), 10);


        this.cities = [];

        this.homeService.requestGalleryCities().subscribe(
            data => {
                this.galleryCities = data.CitiesGallery;
                this.cities = data.CitiesGallery;
            },
            error => {
                console.log('Error has happened');
            });

        this.homeService.requestSliderData().subscribe(
            data => {
                this.sliderImages = data.SliderData;
            },
            error => {
                console.log('Error has happened');
            });
    }

    onCityMouseover(_City: any): void {
        for (let intIndex = 0; intIndex < this.galleryCities.length; intIndex++) {
            if (_City.ID === this.galleryCities[intIndex].ID) {
                this.isHoverActivated[intIndex] = true;
            }
        }
    }

    onCityMouseout(_City: any): void {
        for (let intIndex = 0; intIndex < this.galleryCities.length; intIndex++) {
            this.isHoverActivated[intIndex] = false;
        }

    }

}
