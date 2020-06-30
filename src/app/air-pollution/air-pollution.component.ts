import { Component, OnInit } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { APIService } from '../services/api.service'
@Component({
  selector: 'app-air-pollution',
  templateUrl: './air-pollution.component.html',
  styleUrls: ['./air-pollution.component.css']
})
export class AirPollutionComponent implements OnInit {
  constructor (private http: HttpClient, private api: APIService) {}

  ngOnInit () {
    
  }

  getData () {

  }
}
