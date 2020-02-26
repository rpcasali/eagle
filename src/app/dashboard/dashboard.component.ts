import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { from } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  lineChartData: ChartDataSets[] = [
    { data: [85, 72, 78, 75, 77, 75, 85, 72, 78, 75, 77, 75, 25, 38, 25, 60, 25, 60, 75, 80, 90], label: 'Today' },
    { data: [25, 38, 25, 60, 75, 80, 78, 75, 77, 75, 85, 22, 78, 75, 77, 75, 85, 78, 75, 77, 110], label: 'Yesterday' },
  ];

  lineChartLabels: Label[] = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'];

  lineChartOptions = {
    responsive: true,
  };

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';

  constructor() { }

  ngOnInit(): void {
  }

  listData = [
    {name: "Unredsolved", number: 16},
    {name: "Overdue", number: 43},
    {name: "Open", number: 43},
    {name: "On hold", number: 64}
  ];

  listDataExtra = [
    {name: "Resolved", result: "449"},
    {name: "Received", result: "426"},
    {name: "Average first response time", result: "33m"},
    {name: "Average response time", result: "3h 8m"},
    {name: "Resolution within SLA", result: "94%"},
  ]


}
