import { Component, OnInit } from '@angular/core';
import { StatsList } from '../models/StatsList';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {
  stats: StatsList[];
  constructor() { 
    
  }

  ngOnInit(): void {
    this.stats = [
      {
        item: "Companies",
        statNum: 10000
      },
      {
        item: "Templates",
        statNum: 314
      },
      {
        item: "Queries",
        statNum: 12000000
      }
    ]
  }

  formatStat = (n: number) => {
    if (n < 1e3) return n;
    if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(1) + "k+";
    if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(1) + "M+";
    else {
      return true;
    }
  }
}