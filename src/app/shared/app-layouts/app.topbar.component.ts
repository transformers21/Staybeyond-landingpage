import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {CommunicationService} from '../../app.communication';

@Component({
    selector: 'app-topbar',
    template: `
        <div *ngIf="navigation1">
            <app-navigation1></app-navigation1>
        </div>
        <div *ngIf="navigation2">
            <app-navigation2></app-navigation2>
        </div>
    `
})
export class AppTopbarComponent implements OnInit {

    navigation1: boolean = false;
    navigation2: boolean = false;

    constructor(private cdRef: ChangeDetectorRef, private communication: CommunicationService) {
    }

    ngOnInit(): void {
        this.communication.trackApplicationStatus.subscribe(status => {

            switch (status) {
                case '0': {
                    this.navigation1 = true;
                    this.navigation2 = false;
                    break;
                }
                case '1': {
                    this.navigation1 = true;
                    this.navigation2 = false;
                    break;
                }
                case '2': {
                    this.navigation1 = false;
                    this.navigation2 = true;
                    break;
                }
                default: {
                    break;
                }
            }
            this.cdRef.detectChanges();
        });
    }

}