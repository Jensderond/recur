import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';

class ChartView extends Component {
    render() {
        const payments = this.props.payments;
        const EntertainmentTotal  = payments
                                      .filter((x) => x.category === "Entertainment")
                                      .map((x) => x.amount)
                                      .reduce((a, b) => a + b, 0);

        const EnsuranceTotal      = payments
                                      .filter((x) => x.category === "Verzekeringen")
                                      .map((x) => x.amount)
                                      .reduce((a, b) => a + b, 0);

        const TelecomTotal        = payments
                                      .filter((x) => x.category === "Abbonnement")
                                      .map((x) => x.amount)
                                      .reduce((a, b) => a + b, 0);

        const OtherTotal          = payments
                                      .filter((x) => x.category === "Overig")
                                      .map((x) => x.amount)
                                      .reduce((a, b) => a + b, 0);

        // const { DataView } = DataSet;
          console.log(payments.map((x) => x.category));
        const data = {
          datasets: [{
            data: [ EntertainmentTotal, EnsuranceTotal, TelecomTotal, OtherTotal ],
            backgroundColor: [
              '#68b230',
              '#ee3243',
              '#f7bc1a',
              '#179cd4',
              '#e21b1b'
            ],
  
            hoverBackgroundColor: [
              '#68b230',
              '#ee3243',
              '#f7bc1a',
              '#179cd4',
              '#e21b1b'
            ]
          }],
          
          // With [...new Set] I've removed the duplicate categories
          labels: [...new Set(payments.map((x) => x.category))]
        }
        
        //TODO: Rewrite with https://canvasjs.com/react-charts/pie-chart/
        //TODO: Rewrite with https://www.chartjs.org/docs/latest/getting-started/
        
        return (
            <Doughnut data={data} />
        );
    }
}

export default ChartView;