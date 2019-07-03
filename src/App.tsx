import React from 'react';
import PaymentTable from './Payments/PaymentTable';
import PaymentTotals from './Payments/PaymentTotals';
import PaymentChart from './Payments/PaymentChart';
import Title from './Title';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="flex flex-col w-screen p-8 lg:p-16 App">
      <header>
        <h1 className="text-5xl text-blue-800">Recur</h1>
      </header>

      <div className="flex flex-col lg:flex-row mb-4">
        <div className="lg:w-1/2 lg:mr-4">
          <PaymentTotals currency="&euro;" />
          <PaymentTable currency="&euro;" />
        </div>
        <div className="lg:w-1/2 lg:ml-4 md:mt-0 mt-12">
          <Title title="Overzicht" />
          <PaymentChart />
        </div>
      </div>
    </div>
  );
}

export default App;
