import { Injectable, Inject } from '@angular/core';

import { Gender, PersonalInfo } from './personal-info';

@Injectable()
export class PersonalInfoMockService {
    constructor() { }

    getPetsInfo(): Promise<PersonalInfo[]> {
        let petsInfo: PersonalInfo[] = [
            {
                name: 'Owner001', age: 20, gender: Gender.Male, totalBelonging: 2,
                belonging: [
                    { name: 'Pet010', typeName: 'Cat' },
                    { name: 'Pet001', typeName: 'Dog' }
                ]
            },
            {
                name: 'Owner002', age: 30, gender: Gender.Female, totalBelonging: 1,
                belonging: [
                    { name: 'Pet009', typeName: 'Cat' }
                ]
            },
            {
                name: 'Owner003', age: 40, gender: Gender.Male, totalBelonging: 2,
                belonging: [
                    { name: 'Pet002', typeName: 'Cat' },
                    { name: 'Pet008', typeName: 'Cat' }
                ]
            },
            {
                name: 'Owner004', age: 20, gender: Gender.Female, totalBelonging: 3,
                belonging: [
                    { name: 'Pet004', typeName: 'Cat' },
                    { name: 'Pet006', typeName: 'Fish' },
                    { name: 'Pet005', typeName: 'Cat' }
                ]
            },
            {
                name: 'Owner005', age: 30, gender: Gender.Female, totalBelonging: 2,
                belonging: [
                    { name: 'Pet003', typeName: 'Dog' },
                    { name: 'Pet007', typeName: 'Dog' }
                ]
            },
        ];

        return Promise.resolve(petsInfo);
    }
}