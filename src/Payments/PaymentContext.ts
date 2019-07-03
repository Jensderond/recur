import * as React from 'react';

const PaymentContext = React.createContext({
  payments: [
    { id: 1, name: 'PlayStation Network', amount: 5, category: 'Entertainment' },
    { id: 2, name: 'Tele2', amount: 27, category: 'Abbonnement' },
    { id: 3, name: 'ZLM', amount: 15, category: 'Verzekeringen' },
    { id: 4, name: 'Spotify', amount: 10, category: 'Entertainment' },
    { id: 5, name: 'iCloud drive', amount: 0.99, category: 'Overig' },
  ]
});

export default PaymentContext;
