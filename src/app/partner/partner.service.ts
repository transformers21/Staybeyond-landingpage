import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs';

@Injectable()
export class PartnerService {

  constructor(private http: Http) { }

  requestSliderData(): any {
    return this.http.get('assets/demo/data/sliderdata.json')
        .map((response: Response) => response.json())
        .catch(this.handleError);
  }

  handleError(error: any): Observable<any> {
    return Observable.throw(error);
  }

}
