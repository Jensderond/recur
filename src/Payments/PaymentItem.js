import React, { Component } from 'react';



class PaymentItem extends Component {
    render() {
        const currency = this.props.currency;
        const payment = this.props.payment;

        return (
            <div className="w-full rounded overflow-hidden shadow-lg">
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
}

export default PaymentItem;