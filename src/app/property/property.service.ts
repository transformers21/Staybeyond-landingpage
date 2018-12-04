import { Injectable } from '@angular/core';
import {Response, Http} from '@angular/http';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class PropertyService {

  constructor(private http: Http) { }

  requestSliderData(): any {
    return this.http.get('assets/demo/data/propertydata.json')
        .map((response: Response) => response.json())
        .catch(this.handleError);
  }

  handleError(error: any): Observable<any> {
    return Observable.throw(error);
  }

}
