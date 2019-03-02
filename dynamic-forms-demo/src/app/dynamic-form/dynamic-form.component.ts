import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  template: `
    <form
      class="dynamic-form"
      [formGroup]="form"
      (submit)="handleSubmit($event)">
      <ng-container
        *ngFor="let field of config;"
        appDynamicField
        [config]="field"
        [group]="form">
      </ng-container>
    </form>
  `,
  styleUrls: ['./dynamic-form.component.less']
})
export class DynamicFormComponent implements OnInit {
  @Input()
  config: any[] = [];

  @Output()
  submit: EventEmitter<any> = new EventEmitter<any>();

  form: FormGroup;
  get value() { return this.form.value; }
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.createGroup();
  }

  createGroup() {
    const group = this.fb.group({});
    this.config.forEach(control => group.addControl(control.name, this.fb.control({})));
    return group;
  }

  handleSubmit(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    this.submit.emit(this.value);
  }
}
