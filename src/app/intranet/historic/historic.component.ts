import { Component,OnInit } from '@angular/core';
import { HistoricI } from '../utils/modeles/Types';
import { HistoricService } from './historic.service';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-historic',
  templateUrl: './historic.component.html',
  styleUrls: ['./historic.component.scss']
})
export class HistoricComponent implements OnInit {
  histo: HistoricI[] = [];

  constructor(public historicService:HistoricService) { }

  async ngOnInit(): Promise<void> {
    this.fetchHistoric();
    //this.renderChart(); Pas utilisé car je l'appelle dans fetchHistorique
    Chart.defaults.color = '#ffffff';
  }

  async fetchHistoric() {
    const { data, error } = await this.historicService.getHistoric();
    if (data) {
      this.histo = data.map((item: { [x: string]: any }) => ({
        id: item['id'],
        created_at: item['created_at'],
        humidity: item['humidity'],
        macAddress: item['macAddress']
      }));
        console.log(this.histo.map((item) => item['humidity']));
        this.renderChart();
    }
    if (error) {
      console.log("Error" , error);      
    }
  }

  renderChart() {
    const myChart = new Chart("bar", {
      type: 'bar',
      data: { 
        labels: this.histo.map((item) => { const date = new Date(item.created_at); // Valeurs dynamiques
          return date.toLocaleString('fr-FR', { // pour formater la date au format Français
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
          });
        }),              
        datasets: [{
          label: 'Humidité',
          data: this.histo.map((item) => item['humidity']), 
          /* [100, 80, 65, 50, 40, 35, 20], */
          borderWidth: 4,  
          borderColor: "#1e3860",
          backgroundColor: "#1f375b",                                   
        }],        
      },
      options: {
        responsive: true, 
        maintainAspectRatio: false, 
        scales: {          
          y: {
            beginAtZero: true,
            ticks: { 
              color: '#ffffff',
              //stepSize: 20,              
            },
            grid: {
              color: "#4ECB71" 
            }
          },
          x: {
            max:12,
            ticks: { 
              color: '#ffffff'
            },
            grid: {
              color: "#4ECB71" 
            }
          }
        }
      }
    });
  }

}

