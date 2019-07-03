import React, { useContext } from 'react';
import PaymentContext from './PaymentContext';
import { Doughnut } from 'react-chartjs-2';

function PaymentChart() {
  // Import context with the Hooks API
  const context = useContext(PaymentContext);
  const payments = context.payments;

  const EntertainmentTotal = payments
    .filter((x) => x.category === "Entertainment")
    .map((x) => x.amount)
    .reduce((a, b) => a + b, 0);

  const EnsuranceTotal = payments
    .filter((x) => x.category === "Verzekeringen")
    .map((x) => x.amount)
    .reduce((a, b) => a + b, 0);

  const TelecomTotal = payments
    .filter((x) => x.category === "Abbonnement")
    .map((x) => x.amount)
    .reduce((a, b) => a + b, 0);

  const OtherTotal = payments
    .filter((x) => x.category === "Overig")
    .map((x) => x.amount)
    .reduce((a, b) => a + b, 0);

  const data = {
    datasets: [{
      data: [EntertainmentTotal, EnsuranceTotal, TelecomTotal, OtherTotal],
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

    // With [...new Set] it removes the duplicate categories
    labels: [...new Set(payments.map((x) => x.category))]
  }

  return (
    <Doughnut data={data} />
  );
}

export default PaymentChart;
