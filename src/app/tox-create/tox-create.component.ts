import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-tox-create',
  templateUrl: './tox-create.component.html',
  styleUrls: ['./tox-create.component.css']
})
export class ToxCreateComponent implements OnInit {
  toxData: FormGroup
  imageURL: string
  constructor (private fb: FormBuilder) {}

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
      moleculeImage: file
    })
    this.toxData.get('moleculeImage').updateValueAndValidity()

    const reader = new FileReader()
    reader.onload = () => {
      this.imageURL = reader.result as string
    }
    reader.readAsDataURL(file)
  }

  submit () {
    console.log(this.toxData.value)
  }
}
