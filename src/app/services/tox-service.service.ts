import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ToxServiceService {
  baseUrl = 'http://localhost:3000/api'
  constructor (private _http: HttpClient) {}

  ReadAllToxMol ():Observable<any> {
    return this._http.get('http://localhost:3004/toxMolecules');
  }
}
