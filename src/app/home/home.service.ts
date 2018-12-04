import {Injectable } from '@angular/core';
import {Response, Http} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class HomeService {

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
