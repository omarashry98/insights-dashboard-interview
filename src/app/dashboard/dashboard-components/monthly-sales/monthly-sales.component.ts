import { Component, OnInit } from '@angular/core';
import { monthlySales } from './monthly-sales-data';
import { ApiService } from '../../../services/api.service';


@Component({
  selector: 'app-monthly-sales',
  templateUrl: './monthly-sales.component.html'
})

export class MonthlySalesComponent implements OnInit {

  ListSales: monthlySales[];

  constructor(private _ApiService: ApiService){
    this.ListSales = monthlySales;
  }

  ngOnInit(): void {
    
  }
}

