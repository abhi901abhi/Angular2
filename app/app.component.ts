import { Component } from '@angular/core';
@Component({
    selector: 'pm-app',
    template: `
        <h1>{{pageTitle}}</h1>
        Keeps track of student info
          <pm-product-list></pm-product-list>
    `
})
export class AppComponent {
    pageTitle:string = 'Student Management System'
}
