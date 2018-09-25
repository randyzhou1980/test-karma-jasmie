import { Component, OnInit } from '@angular/core';

import { Gender, PersonalInfo, PetSummary } from './personal-info';
import { PersonalInfoService } from './personal-info.services';
import { FilterPipe } from './filter.pipe';

@Component({
    selector: 'pets-summary',
    templateUrl: './pets-summary.component.html',
    styleUrls: ['./pets-summary.component.css'],
    providers: [PersonalInfoService]

})
export class PetsSummaryComponent implements OnInit {
    filterValue: string = "cat";
    petsSummary: PetSummary[];

    constructor(private personalInfoService: PersonalInfoService) {
    }

    ngOnInit(): void {
        this.getPetsInfo();
    }

    getPetsInfo(): void {
        this.personalInfoService.getPetsInfo().then(personalInfo => {
            this.petsSummary = [];

            personalInfo.map(info => this.generatePetSummary(info));

            this.petsSummary = this.sortPetSummary();
        });
    }

    private generatePetSummary(info: PersonalInfo) : void {
        if (info.belonging == null) {
            return;
        }

        info.belonging.map(pet => {
            this.petsSummary.push(
                {
                    name : pet.name,
                    type : pet.typeName,
                    ownerName : info.name,
                    ownerAge : info.age,
                    ownerGender: info.gender === Gender.Male ? "Male" : "Female"
                }
            );
        });
    }

    private sortPetSummary(): PetSummary[] {
        if (this.petsSummary.length < 2)
            return this.petsSummary;

        return this.petsSummary.sort((p1, p2) => {
            if (p1.ownerGender < p2.ownerGender)
                return 1;
            else if (p1.ownerGender > p2.ownerGender)
                return -1;
            else if (p1.name > p2.name)
                return 1;
            else if (p1.name < p2.name)
                return -1;

            return 0;
        });
    }
}