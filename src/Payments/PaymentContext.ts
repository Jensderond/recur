import * as React from 'react';

type PaymentContextProps = {
  currency: 'EUR' | 'USD',
  payments: Payment[]
}

type Payment = {
  id: number;
  name: string;
  amount: number;
  category: 'Entertainment' | 'Abbonnement' | 'Overig' | 'Verzekeringen';
}

const PaymentContext = React.createContext<PaymentContextProps>({
  currency: "EUR",
  payments: [
    { id: 6, name: 'Spotify', amount: 15, category: 'Entertainment' },
    { id: 7, name: 'Tele2', amount: 34.50, category: 'Abbonnement' },
    { id: 8, name: 'BasicFit', amount: 33.99, category: 'Abbonnement' }
  ]
});

export default PaymentContext;
