import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-air-pollution',
  templateUrl: './air-pollution.component.html',
  styleUrls: ['./air-pollution.component.css']
})
export class AirPollutionComponent implements OnInit {
  constructor (private _fb:FormBuilder) {}

  private userData:FormGroup
  ngOnInit () {
    this._fb.group({
      lastname: [null, Validators.required],
      firstname: [null, Validators.required],
      sessionDate: [null, Validators.required],
      email:[null, [Validators.required, Validators.email]]
    });
  }

 
}
