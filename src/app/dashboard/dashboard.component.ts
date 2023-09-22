import { Component, SimpleChanges } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { GlobalServiceService } from '../global-service.service';

Chart.register(...registerables);

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

    showMyContainer:boolean = true;


    constructor(private globleservices:GlobalServiceService){

    }

  ngOnInit(){
    var barChart = new Chart("barChart", {
      type: 'bar',
      data: {
          labels: ['2015', '2016', '2017','2018','2019','2020','2021','2022','2023'],
          datasets: [{
              label: '# of Votes',
              data: [32, 79, 13, 35, 80, 40, 92, 82, 22],
              backgroundColor: [
                  'rgba(58, 183, 255, 1)',
              ],
              barPercentage:0.8,
              categoryPercentage:0.5,
              borderRadius: Number.MAX_VALUE,
              borderSkipped: false,
              borderWidth: 1
          },{
            label: '# of Votes',
            data: [92, 89, 39, 50, 32, 32, 81, 62, 52],
            backgroundColor: [
                'rgba(206, 79, 240, 0.92)',
            ],
            barPercentage:0.8,
            categoryPercentage:0.5,
            borderRadius: Number.MAX_VALUE,
            borderSkipped: false,
            borderWidth: 1
        }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });

  var lineChart = new Chart("lineChart", {
    type: 'line',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});


    barChart.resize();


    
    
     
  }

 

 

  changeShowMyContainer(){
    // this.globleservices.asideGlobalVariable =! this.globleservices.asideGlobalVariable;
    // console.log(this.globleservices.asideGlobalVariable);
       
    this.globleservices.selectedProduct$.subscribe((value) => {
        // this.selectedProduct = value;
        this.showMyContainer = value;
        // console.log(value);
        
    });
    
    this.showMyContainer = !this.showMyContainer;
    this.globleservices.setProduct(this.showMyContainer);
    console.log(this.globleservices.selectedProduct$);
  }
}
