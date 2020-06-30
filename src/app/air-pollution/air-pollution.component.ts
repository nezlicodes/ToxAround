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
    this.getData()
  }

  getData () {
    /*  let headers = new HttpHeaders()
    headers.append('x-rapidapi-host', 'air-quality.p.rapidapi.com')
    headers.append(
      'X-RapidAPI-Key',
      '0e5b5a5cdamshaf3dcfd85d30e3fp1f887bjsn57fb0d3ce2ec'
    )
    this.http
      .get(
        'https://air-quality.p.rapidapi.com/current/airquality?lon=-73.00597&lat=40.71427',
        {
          headers: headers
        }
      ) */
  /*   this.api.getData().subscribe(response => {
      console.log(response)
    }) */
  }
}
