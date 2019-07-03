import React from 'react';

function PaymentItem(props) {
  const currency = props.currency;
  const payment = props.payment;

  return (
    <div className="w-full rounded overflow-hidden shadow-md bg-gray-200 mb-4 cursor-pointer transition hover:scale">
      <div className="flex flex-row justify-between px-6 pt-4">
        <div className="font-bold text-xl">{payment.name}</div>
        <p className="text-gray-700 text-base">{currency + payment.amount}</p>
      </div>
      <div className="flex flex-row px-6 pb-2">
        <p className="text-gray-700 text-base">{payment.category}</p>
      </div>
    </div>
  );
}

export default PaymentItem;
