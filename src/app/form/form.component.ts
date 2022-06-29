import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActionService} from "../state/action.service";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  form: FormGroup = this.fb.group({
    title: ["", [Validators.required]],
    price: [0, [Validators.required, Validators.min(0)]]
  });

  constructor(private fb: FormBuilder, private action: ActionService) {
  }

  ngOnInit(): void {
  }

  submitForm() {
    this.action.addItem(this.form.value);
  }
}
