import React, { useContext } from 'react';
import PaymentTable from './Payments/PaymentTable';
import Recap from './Recap';
import ChartView from './ChartView';
import Title from './Title';
import PaymentContext from './Payments/PaymentContext';
import './App.css';

// const PAYMENTS = [
//   {id: 1, name: 'PlayStation Network', amount: 5, category: 'Entertainment'},
//   {id: 2, name: 'Tele2', amount: 27, category: 'Abbonnement'},
//   {id: 3, name: 'ZLM', amount: 15, category: 'Verzekeringen'},
//   {id: 4, name: 'Spotify', amount: 10, category: 'Entertainment'},
//   {id: 5, name: 'iCloud drive', amount: 0.99, category: 'Overig'},
// ];

function App() {
  const context = useContext(PaymentContext);
  const paymentsTotal = context.payments.map((x) => x.amount).reduce((a, b) => a + b)
  return (
    <div className="flex flex-col w-screen p-8 lg:p-16 App">
      <header>
        <h1 className="text-5xl text-blue-800">Recur</h1>
      </header>

      <div className="flex flex-col lg:flex-row mb-4">
        <div className="lg:w-1/2 lg:mr-4">
          <Recap currency="&euro;" value={Math.round(paymentsTotal)} />
          <PaymentTable currency="&euro;" />
        </div>
        <div className="lg:w-1/2 lg:ml-4 md:mt-0 mt-12">
          <Title title="Overzicht" />
          <ChartView />
        </div>
      </div>
    </div>
  );
}

export default App;
