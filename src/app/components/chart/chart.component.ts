import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PointDto} from "../../rest/point.dto";

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  data: PointDto[];

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.httpClient.get<PointDto[]>("assets/data.json")
      .subscribe((data) => {
        this.data = data;
      })
  }
}
