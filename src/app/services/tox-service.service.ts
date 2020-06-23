import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ToxServiceService {
  baseUrl = 'http://localhost:3000/api'
  constructor (private _http: HttpClient) {}

  ReadAllToxMol () {
    return this._http.get(this.baseUrl + '/toxMolecules')
  }
}
