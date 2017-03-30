import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { Dashboard } from './dashboard.component';
import { routing }       from './dashboard.routing';

import { LineChart } from './lineChart';
import { LineChartService } from './lineChart/lineChart.service';
import {nvD3} from 'ng2-nvd3';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing
  ],
  declarations: [
    LineChart, 
    Dashboard,
    nvD3
  ],
  providers: [
    LineChartService
  ]
})
export class DashboardModule {}
