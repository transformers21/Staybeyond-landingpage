import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {AppService} from './app.service';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./app.component.scss'],
  providers: [AppService]
})
export class AppComponent implements OnInit {

  private viewContainerRef: ViewContainerRef;

  public constructor(viewContainerRef: ViewContainerRef) {

    this.viewContainerRef = viewContainerRef;
  }

  ngOnInit(): void {

  }


}