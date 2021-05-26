import React from "react";
import Button from "react-paypal-express-checkout";

const PaypalButton = ({ total  }) => {
  const grandTotal = Number(total);
  const onSuccess = (payment) => {
    console.log("Payment successful!", payment);
  };

  const onCancel = (data) => {
    console.log("Payment cancelled!", data);
  };

  const onError = (err) => {
    console.log("Error!", err);
  };

  let env = "sandbox";
  let currency = "USD";

  const client = {
    sandbox:
      "AT8_KxiX7NoKv1SHXIObcISSOva5RMgJpATir6EbUgGYawYy1063f4g50aZr5GM8Iuk0CpKc4YAun8nR",
    production: "YOUR-PRODUCTION-APP-ID",
  };
  console.log(grandTotal);
  return (
    <Button
      env={env}
      client={client}
      currency={currency}
      onError={onError}
      onSuccess={onSuccess}
      onCancel={onCancel}
      total={grandTotal}
    />
  );
};

export default PaypalButton;
