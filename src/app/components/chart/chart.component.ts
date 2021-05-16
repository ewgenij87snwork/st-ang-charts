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
        const labelsArray = data.map(point => point.rating);
        const dataArray = data.map(point => point.ltvLift);
        const uniqueLabels = Array.from(new Set(labelsArray));

        this.dataFromJson = {
          labels: uniqueLabels,
          datasets: [
            {
              label: "1 Previous Order",
              data: dataArray,
              borderColor: 'rgb(66, 133, 244)',
              backgroundColor: 'rgb(66, 133, 244)',
              fill: true
            }
          ]
        }
      })

  }
}
