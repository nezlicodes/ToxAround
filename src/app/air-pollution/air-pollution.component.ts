import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-air-pollution',
  templateUrl: './air-pollution.component.html',
  styleUrls: ['./air-pollution.component.css']
})
export class AirPollutionComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('https://api.waqi.info/feed/algiers/?token=d0108c8944a13c3f95dd49fc872012c0d1a45843').subscribe((res:any) => console.log(res.data));
  }

}
