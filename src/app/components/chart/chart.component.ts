import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PointDto} from "../../rest/point.dto";
import {Chart} from "chart.js";

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  dataFromJson: any;
  chart: Chart;

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit(): void {
    this.httpClient.get<PointDto[]>("assets/data.json")
      .subscribe((data) => {
        const labelsFromJson = data.map(point => point.rating)
        const uniqueLabels = Array.from(new Set(labelsFromJson));

        this.dataFromJson = {
          labels: uniqueLabels,
          datasets: [

          ]

        }
        console.log(this.dataFromJson)
      })

    // this.chart = new Chart("canvas", {
    //   type: "line",
    //   data: this.dataJson,
    //   options
    // })
  }
}
