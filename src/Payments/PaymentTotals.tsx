import React, { useContext } from "react";
import PaymentContext from "./PaymentContext";
import Tooltip from "../Tooltip";

export interface IPaymentTotalsProps {
  currency: "EUR" | "USD";
}

export default function PaymentTotals(props: IPaymentTotalsProps) {
  const context = useContext(PaymentContext);
  const paymentsTotal = context.payments
    .map((x) => x.amount)
    .reduce((a, b) => a + b);
  return (
    <div className="inline-block pb-4">
      <Tooltip placement="right" content="Totale maandelijkse uitgave">
        <p className="text-3xl text-blue-600">
          {new Intl.NumberFormat("nl-NL", {
            style: "currency",
            currency: props.currency,
          }).format(paymentsTotal)}
        </p>
      </Tooltip>
    </div>
  );
}
