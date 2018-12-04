import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class SearchService {


  constructor(private http: Http) { }

  requestGalleryCities(): any {
    return this.http.get('assets/demo/data/cities.json')
        .map((response: Response) => response.json())
        .catch(this.handleError);
  }

  requestSliderData(): any {
      return this.http.get('assets/demo/data/sliderdata.json')
          .map((response: Response) => response.json())
          .catch(this.handleError);
  }

  handleError(error: any): Observable<any> {
    return Observable.throw(error);
  }

}
