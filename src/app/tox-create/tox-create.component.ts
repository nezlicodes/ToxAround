import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ToxServiceService } from '../services/tox-service.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-tox-create',
  templateUrl: './tox-create.component.html',
  styleUrls: ['./tox-create.component.css']
})
export class ToxCreateComponent implements OnInit {
  toxData: FormGroup
  imageURL: string
  constructor (private fb: FormBuilder, private _toxs:ToxServiceService, private _router:Router) {}

  ngOnInit () {
    this.toxData = this.fb.group({
      moleculeName: [null, Validators.required],
      moleculeClasse: [null, Validators.required],
      moleculeDescription: [null, Validators.required],
      moleculeImage: [null]
    })
  }

  showPreview (event) {
    const file = (event.target as HTMLInputElement).files[0]
    this.toxData.patchValue({
      moleculeImage: '/assets/' + file.name
    })
    this.toxData.get('moleculeImage').updateValueAndValidity()

    const reader = new FileReader()
    reader.onload = () => {
      this.imageURL = reader.result as string
    }
    reader.readAsDataURL(file)
  }

  submit () {
    this._toxs.createToxMol(this.toxData.value).subscribe(res => this._router.navigate(['/']) )
  }
}
