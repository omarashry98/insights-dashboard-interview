import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Chart, registerables } from '../../../node_modules/chart.js';
import { monthlySales } from '../dashboard/dashboard-components/monthly-sales/monthly-sales-data';
Chart.register(...registerables);

@Component({
  selector: 'app-mychart',
  templateUrl: './mychart.component.html',
  styleUrls: ['./mychart.component.scss']
})
export class MychartComponent implements OnInit {

  constructor(private service: ApiService ) { }

  chartdata?: monthlySales[];

  Ydata: any[] = [];
  Xdata: any[] = [];
  Years: Set<string> = new Set();

  

  async ngOnInit(): Promise<void> {
    this.chartdata = await this.service.getSales();
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
    


    this.chartdata.sort((a, b) => {
      if (a.invoice_year !== b.invoice_year) {
        // Sort by year
        return Number(a.invoice_year) - Number(b.invoice_year);
      } else {
        // Sort by month
        return Number(a.invoice_month) - Number(b.invoice_month);
      }
    });

    if(this.chartdata.length){
      // const labels = [];
      const colors = [];
      for(let i=0; i<this.chartdata.length; i++){
        //console.log(this.chartdata[i]);
        const month = monthNames[Number(this.chartdata[i].invoice_month)-1];
        const year = this.chartdata[i].invoice_year;
        this.Years.add(year);
        const name = month + ", " + year;
    
        this.Ydata.push(name);
        this.Xdata.push(this.chartdata[i].amount);
        colors.push(this.color[this.Years.size-1].hex);
        //labels.push(Array.from(this.Years));
        
      }
      let labels = [...this.Years];
      console.log(labels);
      
      this.RenderChart(this.Ydata, this.Xdata, colors, labels);
    }
  }
  color = [
    {
      "name": "Periwinkle",
      "hex": "#CCCCFF"
    },
    {
      "name": "Plum",
      "hex": "#DDA0DD"
    },
    {
      "name": "Peach",
      "hex": "#FFE5B4"
    },
    {
      "name": "Red",
      "hex": "#FF0000"
    },
    {
      "name": "Green",
      "hex": "#00FF00"
    },
    {
      "name": "Blue",
      "hex": "#0000FF"
    },
    {
      "name": "Yellow",
      "hex": "#FFFF00"
    },
    {
      "name": "Purple",
      "hex": "#800080"
    },
    {
      "name": "Orange",
      "hex": "#FFA500"
    },
    {
      "name": "Pink",
      "hex": "#FFC0CB"
    },
    {
      "name": "Teal",
      "hex": "#008080"
    },
    {
      "name": "Aqua",
      "hex": "#00FFFF"
    },
    {
      "name": "Maroon",
      "hex": "#800000"
    },
    {
      "name": "Turquoise",
      "hex": "#40E0D0"
    },
    {
      "name": "Navy",
      "hex": "#000080"
    },
    {
      "name": "Lime",
      "hex": "#00FF00"
    },
    {
      "name": "Mint",
      "hex": "#BDFCC9"
    },
  ] as const;
  
  RenderChart(Y: string[], X: string[], colors: string[], labels: string[]){
    
    new Chart("barchart", {
      type: 'bar',
      data: {
        labels: Y,
        datasets: [{
          data: X,
          borderWidth: 1,
          backgroundColor: colors

        }],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        },
        plugins: {
          legend:{
            display: false,
          }
        }
      }
    });

  }

}


