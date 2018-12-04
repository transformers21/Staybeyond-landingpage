import { Component, OnInit, ViewChild } from '@angular/core';
import {SearchService} from './search.service';
import {CommunicationService} from '../app.communication';
import {SliderClass} from '../app.classes';
import {SelectItem} from 'primeng/components/common/api';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  cities: SelectItem[];
  selectedCity: any;
  checkinDate: Date;
  checkoutDate: Date;
  guestNumber: string;
  iwState: boolean = false;
  @ViewChild('AgmMap') agmMap;
  @ViewChild('InfoWindow') infoWindow;


  lat: number = 51.678418;
  lng: number = 7.809007;
  zoom: number = 14;
  styles: Object = [
      {
          'featureType': 'administrative',
          'elementType': 'all',
          'stylers': [
              {
                  'saturation': '-100'
              }
          ]
      },
      {
          'featureType': 'administrative.province',
          'elementType': 'all',
          'stylers': [
              {
                  'visibility': 'off'
              }
          ]
      },
      {
          'featureType': 'landscape',
          'elementType': 'all',
          'stylers': [
              {
                  'saturation': -100
              },
              {
                  'lightness': 65
              },
              {
                  'visibility': 'on'
              }
          ]
      },
      {
          'featureType': 'poi',
          'elementType': 'all',
          'stylers': [
              {
                  'saturation': -100
              },
              {
                  'lightness': '50'
              },
              {
                  'visibility': 'simplified'
              }
          ]
      },
      {
          'featureType': 'road',
          'elementType': 'all',
          'stylers': [
              {
                  'saturation': '-100'
              }
          ]
      },
      {
          'featureType': 'road.highway',
          'elementType': 'all',
          'stylers': [
              {
                  'visibility': 'simplified'
              }
          ]
      },
      {
          'featureType': 'road.arterial',
          'elementType': 'all',
          'stylers': [
              {
                  'lightness': '30'
              }
          ]
      },
      {
          'featureType': 'road.local',
          'elementType': 'all',
          'stylers': [
              {
                  'lightness': '40'
              }
          ]
      },
      {
          'featureType': 'transit',
          'elementType': 'all',
          'stylers': [
              {
                  'saturation': -100
              },
              {
                  'visibility': 'simplified'
              }
          ]
      },
      {
          'featureType': 'water',
          'elementType': 'geometry',
          'stylers': [
              {
                  'hue': '#ffff00'
              },
              {
                  'lightness': -25
              },
              {
                  'saturation': -97
              }
          ]
      },
      {
          'featureType': 'water',
          'elementType': 'labels',
          'stylers': [
              {
                  'lightness': -25
              },
              {
                  'saturation': -100
              }
          ]
      }
  ];

  sliderImages: SliderClass[];
  imageLocation: string = 'assets/images/';

  isHoverActivated: boolean[] = [false, false, false, false, false, false, false, false];

  constructor(private searchService: SearchService, private communication: CommunicationService) { }
    updateDiv(): void {
        setTimeout(() => {
            if (!this.iwState) {
                this.iwState = !this.iwState;
                const style = this.agmMap._elem.nativeElement.children[0].children[0].children[0].children[0].children[3].children[3].children[0].children[1].getAttribute('style');
                const el = this.agmMap._elem.nativeElement.children[0].children[0].children[0].children[0].children[3].children[3].children[0].children[1];
                const close = this.agmMap._elem.nativeElement.children[0].children[0].children[0].children[0].children[3].children[3].children[0].children[2];
                close.parentNode.removeChild(close);
                el.style.overflow = 'visible';
                el.children[0].style.overflow = 'visible';
            } else {
                this.iwState = !this.iwState;
                this.infoWindow.close();
            }
        }, 10);
    }
  ngOnInit(): void {
    this.communication.trackApplicationStatus.next('2');

    this.searchService.requestGalleryCities().subscribe(
        data => {
          this.cities = data.CitiesGallery;
        },
        error => {
          console.log('Error has happened');
        });

    this.searchService.requestSliderData().subscribe(
      data => {
          this.sliderImages = data.SliderData;
      },
      error => {
          console.log('Error has happened');
      });
  }

  onCityMouseover(_ID: any): void {
    this.isHoverActivated[_ID] = true;
  }

  onCityMouseout(_ID: any): void {
    this.isHoverActivated[_ID] = false;

  }

}
