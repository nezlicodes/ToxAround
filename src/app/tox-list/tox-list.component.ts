import { Component, OnInit } from '@angular/core'
import { ToxServiceService } from '../services/tox-service.service'
import ToxMolecule from '../models/toxMoleculeModel'

@Component({
  selector: 'app-tox-list',
  templateUrl: './tox-list.component.html',
  styleUrls: ['./tox-list.component.css']
})
export class ToxListComponent implements OnInit {
  public molecules: ToxMolecule[] = []
  constructor (private _ts: ToxServiceService) {}

  ngOnInit () {
    this.getMolecules();
  }

  getMolecules () {
    return this._ts
      .ReadAllToxMol()
      .subscribe(res => this.molecules = res);
  }
}
