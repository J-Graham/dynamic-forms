import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-input',
  template: `
      <div class="form-group"
        [formGroup]="group">
        <label>{{ config.label }}</label>
        <input class="form-control"
          type="text"
          [attr.placeholder]="config.placeholder"
          [formControlName]="config.name" />
      </div>
  `,
  styles: []
})
export class FormInputComponent {
  config;
  group: FormGroup;
}
