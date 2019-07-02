import React, { Component } from 'react';
import PaymentItem from './PaymentItem';

class PaymentTable extends Component {
    render() {
        const currency = this.props.currency;
        const rows = [];

        this.props.payments.forEach((payment) => {
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
}

export default PaymentTable;