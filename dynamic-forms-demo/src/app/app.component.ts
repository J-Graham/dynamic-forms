import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  config = [
    {
      type: 'input',
      label: 'Full name',
      name: 'name',
      placeholder: 'Enter your name',
    },
    {
      type: 'input',
      label: 'Email',
      name: 'email',
      placeholder: 'Enter your email',
    },
    {
      type: 'select',
      label: 'Occupation',
      name: 'occupation',
      options: ['Developer', 'Senior Developer', 'Copy and Paste from Stack Overflow', 'Cloud Architect'],
      placeholder: 'Select an option',
    },
    {
      label: 'Submit',
      name: 'submit',
      type: 'button',
    },
  ];

  formSubmitted(value) {
    console.log(value);
  }
}
