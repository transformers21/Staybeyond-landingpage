import { Component, OnInit } from '@angular/core';
import {AboutService} from './about.service';
import {CommunicationService} from '../app.communication';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

    constructor(private cityService: AboutService, private communication: CommunicationService) { }

    ngOnInit(): void {
        this.communication.trackApplicationStatus.next('2');
    }

}
