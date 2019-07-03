import React, { useContext } from 'react';
import PaymentContext from './PaymentContext';
import Tooltip from '../Tooltip';

function PaymentTotals(props) {
  const context = useContext(PaymentContext);
  const paymentsTotal = context.payments.map((x) => x.amount).reduce((a, b) => a + b)

  return (
    <div className="inline-block pb-4">
      <Tooltip placement="right" content="Totale maandelijkse uitgave">
        <p className="text-3xl text-blue-600">{props.currency + paymentsTotal}</p>
      </Tooltip>
    </div>
  );
}

export default PaymentTotals;
