import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-select',
  template: `
    <div
      class="form-group"
      [formGroup]="group">
      <label>{{ config.label }}</label>
      <select class="form-control" [formControlName]="config.name">
        <option value="">{{ config.placeholder }}</option>
        <option *ngFor="let option of config.options">
          {{ option }}
        </option>
      </select>
    </div>
  `,
  styles: []
})
export class FormSelectComponent {
  config;
  group: FormGroup;
}
