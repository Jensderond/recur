import React, { useContext } from 'react';
import PaymentContext from './PaymentContext';
import PaymentItem from './PaymentItem';

function PaymentTable(props) {
  const context = useContext(PaymentContext);
  const currency = props.currency;
  const rows = [];
  context.payments.forEach((payment) => {
    rows.push(
      <PaymentItem
        currency={currency}
        payment={payment}
        key={payment.id} />
    );
  });

  return (
    <div>
      {rows}
    </div>
  );
}

export default PaymentTable;
