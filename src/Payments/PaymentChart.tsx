import React, { useContext } from "react";
import PaymentContext from "./PaymentContext";
import { Doughnut } from "react-chartjs-2";

export default function App() {
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

  const chartData = [
    new Intl.NumberFormat("en-US").format(EntertainmentTotal),
    new Intl.NumberFormat("en-US").format(EnsuranceTotal),
    new Intl.NumberFormat("en-US").format(TelecomTotal),
    new Intl.NumberFormat("en-US").format(OtherTotal),
  ];

  const data = {
    datasets: [
      {
        data: chartData.filter((e) => parseInt(e) !== 0),
        backgroundColor: [
          "#68b230",
          "#ee3243",
          "#f7bc1a",
          "#179cd4",
          "#e21b1b",
        ],

        hoverBackgroundColor: [
          "#68b230",
          "#ee3243",
          "#f7bc1a",
          "#179cd4",
          "#e21b1b",
        ],
      },
    ],

    // With [...new Set] it removes the duplicate categories
    labels: [...new Set(payments.map((x) => x.category))],
  };

  return <Doughnut data={data} />;
}
