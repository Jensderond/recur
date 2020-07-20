import React, { useContext } from "react";
import PaymentContext from "./PaymentContext";
import PaymentItem from "./PaymentItem";

export interface IPaymentTableProps {
  currency: "EUR" | "USD";
}

export default function PaymentTable(props: IPaymentTableProps) {
  const context = useContext(PaymentContext);
  const currency = props.currency;
  const rows: any = [];

  context.payments.forEach((payment) => {
    rows.push(
      <PaymentItem currency={currency} payment={payment} key={payment.id} />
    );
  });
  return <div>{rows}</div>;
}
