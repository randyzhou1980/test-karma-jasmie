import { Component } from '@angular/core';

@Component({
    selector: 'people-header',
    templateUrl: './people-header.component.html',
    styleUrls: ['./people-header.component.css']
})
export class PeopleHeaderComponent {
    title: string = "Personal Info";

    constructor() {
    }
}