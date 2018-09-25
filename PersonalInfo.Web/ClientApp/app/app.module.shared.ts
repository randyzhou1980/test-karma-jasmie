import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';

import { PeopleComponent } from './components/people/people.component';
import { PeopleHeaderComponent } from './components/people/people-header.component';
import { FilterPipe } from './components/people/filter.pipe';
import { PetsSummaryComponent } from './components/people/pets-summary.component';

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,

        PeopleComponent,
        PeopleHeaderComponent,
        FilterPipe,
        PetsSummaryComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'people', pathMatch: 'full' },
            { path: 'people', component: PeopleComponent },
            { path: '**', redirectTo: 'people' }
        ])
    ]
})
export class AppModuleShared {
}
