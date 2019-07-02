import React from 'react';
import './App.css';
import PaymentTable from './Payments/PaymentTable';
import Recap from './Recap';
import ChartView from './ChartView';
import Title from './Title';

const PAYMENTS = [
  {id: 1, name: 'PlayStation Network', amount: 5, category: 'Entertainment'},
  {id: 2, name: 'Tele2', amount: 27, category: 'Abbonnement'},
  {id: 3, name: 'ZLM', amount: 15, category: 'Verzekeringen'},
  {id: 4, name: 'Spotify', amount: 10, category: 'Entertainment'},
  {id: 5, name: 'iCloud drive', amount: 0.99, category: 'Overig'},
];

function App() {
  const paymentsTotal = PAYMENTS.map((x) => x.amount).reduce((a,b) => a + b)
  return (
    <div className="flex flex-col w-screen p-8 lg:p-16">
      <header>
        <h1 className="text-5xl text-blue-800">Recur</h1>
      </header>

      <div className="flex flex-col lg:flex-row mb-4">
        <div className="lg:w-1/2 lg:mr-4">
          <Title title="Maandelijkse Uitgave" />
          <Recap currency="&euro;" value={Math.round(paymentsTotal)} />
          <PaymentTable currency="&euro;" payments={PAYMENTS} />
        </div>
        <div className="lg:w-1/2 lg:ml-4 md:mt-0 mt-12">
          <Title title="Overzicht" />
          <ChartView payments={PAYMENTS} />
        </div>
      </div>
    </div>
  );
}

export default App;
