/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { assert } from 'chai';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';

import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { PetsSummaryComponent } from './pets-summary.component';
import { PersonalInfoService } from './personal-info.services';
import { PersonalInfoMockService } from './personal-info-mock.services';
import { FilterPipe } from './filter.pipe';
import { PetSummary } from './personal-info';

let fixture: ComponentFixture<PetsSummaryComponent>;

describe('Pets summary component', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                BrowserModule,
                CommonModule,
                HttpModule,
                FormsModule,
            ],
            declarations: [
                PetsSummaryComponent,
                FilterPipe
            ],
            providers: [
                { provide: 'BASE_URL', useValue: './' },
                PersonalInfoService
            ]
        });

        TestBed.overrideComponent(PetsSummaryComponent, {
            set: {
                providers: [
                    { provide: PersonalInfoService, useClass: PersonalInfoMockService },
                ]
            }
        });

        fixture = TestBed.createComponent(PetsSummaryComponent);
        fixture.detectChanges();
    });

    it('should display default value cat', async(() => {
        fixture.whenStable().then(() => {
            let input = fixture.nativeElement.querySelector('input');

            expect(input.value).toBe('cat');
        });
    }));

    it('should display all pets of cat', async(() => {
        fixture.whenStable().then(() => {
            let comp = fixture.componentInstance;

            spyOn(comp, 'getPetsInfo');
            fixture.detectChanges();

            let rows = fixture.nativeElement.querySelectorAll('tbody tr');

            expect(rows.length).toBe(6);
        });
    }));

    it('should convert personal info to pet summary', async(() => {
        fixture.whenStable().then(() => {
            let comp = fixture.componentInstance;

            spyOn(comp, 'getPetsInfo');
            fixture.detectChanges();

            let result = comp.petsSummary;
            expect(result.length).toBe(10);
            expect(result[0].name).toBe('Pet001');
            expect(result[0].type).toBe('Dog');
            expect(result[0].ownerName).toBe('Owner001');
            expect(result[0].ownerGender).toBe('Male');
            expect(result[0].ownerAge).toBe(20);

        });
    }));

    it('should sort pet summary by owner gender and pet name', async(() => {
        fixture.whenStable().then(() => {
            let comp = fixture.componentInstance;

            spyOn(comp, 'getPetsInfo');
            fixture.detectChanges();

            let result = comp.petsSummary;
            expect(result.length).toBe(10);

            let lastOwnerGender = result[9].ownerGender;
            expect(result.every(r => r.ownerGender >= lastOwnerGender)).toBe(true);

            let firstPetName = result[0].name;
            expect(result.every(r => r.name >= firstPetName)).toBe(true);
        });
    }));

    it('should filter pet summary by filterValue', async(() => {
        fixture.whenStable().then(() => {
            let comp = fixture.componentInstance;

            comp.filterValue = 'Fish';
            fixture.detectChanges();

            let rows = fixture.nativeElement.querySelectorAll('tbody tr');

            expect(rows.length).toBe(1);
        });
    }));
});
