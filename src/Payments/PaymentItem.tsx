import * as React from 'react';

export interface IPaymentItemProps {
  currency: string,
  payment: {
    id: number,
    name: string,
    amount: number,
    category: string
  }
}

export default class PaymentItem extends React.Component<IPaymentItemProps, any> {
  public render() {
    return (
      <div className="w-full rounded overflow-hidden shadow-md bg-gray-200 mb-4 cursor-pointer transition hover:scale">
        <div className="flex flex-row justify-between px-6 pt-4">
          <div className="font-bold text-xl">{this.props.payment.name}</div>
          <p className="text-gray-700 text-base">{this.props.currency + this.props.payment.amount}</p>
        </div>
        <div className="flex flex-row px-6 pb-2">
          <p className="text-gray-700 text-base">{this.props.payment.category}</p>
        </div>
      </div>
    );
  }
}
