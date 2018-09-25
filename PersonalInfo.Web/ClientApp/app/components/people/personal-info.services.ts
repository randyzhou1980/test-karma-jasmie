import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { PersonalInfo } from './personal-info';

@Injectable()
export class PersonalInfoService {
    constructor(private http: Http, @Inject('BASE_URL') private baseUrl: string) { }

    getPetsInfo(): Promise<PersonalInfo[]> {
        let petsInfoUrl: string = this.baseUrl + 'api/PersonalInfo/PetInfoSummary';

        return this.http.get(petsInfoUrl)
            .toPromise()
            .then(response => response.json() as PersonalInfo[])
            .catch(this.errorHandler);
    }

    private errorHandler(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}