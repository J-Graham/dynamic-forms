import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-button',
  template: `
      <div
        [formGroup]="group">
        <button class="btn btn-primary" type="submit">
          {{ config.label }}
        </button>
      </div>
  `,
  styles: []
})
export class FormButtonComponent {
  config;
  group: FormGroup;
}
