import {Component, OnInit, AfterViewInit, ViewChild} from '@angular/core';
import {Input} from '@angular/core';
import {nvD3} from 'ng2-nvd3';
import {LineChartService} from './lineChart.service';

import 'style-loader!./lineChart.scss';
declare var d3: any;


@Component({
  selector: 'line-chart',
  templateUrl: './lineChart.html'
})
export class LineChart {

  options;
  public data = [];
  public timelineData = [];
  chartType;

  @ViewChild(nvD3)
  nvD3: nvD3;

  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
  public chartHovered(e:any):void {
    console.log(e);
  }

  constructor(private _lineChartService:LineChartService) {
    this._lineChartService.getData((time) => {
      this.timelineData.push(time);
      this.ngAfterViewInit();
    });
  }

  ngOnInit(){
    
    this.options = {
      chart: {
        type: 'lineChart',
        height: 450,
        margin : {
          top: 20,
          right: 20,
          bottom: 40,
          left: 55
        },
        x: function(d){ return d.x; },
        y: function(d){ return d.y; },
        useInteractiveGuideline: true,
        xAxis: {
          axisLabel: 'Time (years)'
        },
        yAxis: {
          axisLabel: 'Population (1000s)',
          tickFormat: function(d){
            return d3.format('.02f')(d);
          },
          axisLabelDistance: -10
        }
      }
    };
    this.data = [
      {
        values: this.timelineData,      //values - represents the array of {x,y} data points
        key: 'Annual Sheep Population in England and Wales', //key  - the name of the series.
        color: '#ff7f0e'  //color - optional: choose your own line color.
      }
    ];

  }
  ngAfterViewInit() {
    // this.nvD3 - directive instance
    // for example, to update the chart
    this.nvD3.chart.update();
  } 
}
