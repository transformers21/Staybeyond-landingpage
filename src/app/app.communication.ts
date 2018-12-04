import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs/Rx';


@Injectable()
export class CommunicationService {

    public trackApplicationStatus: any = new BehaviorSubject('1');

}