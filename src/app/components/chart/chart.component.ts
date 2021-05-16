import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  data: any;

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.httpClient.get<any>("assets/data.json")
      .subscribe((data) => {
        this.data = data;
        console.log(this.data)
      })
  }

}
