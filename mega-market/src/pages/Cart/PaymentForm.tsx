// PaymentForm.tsx
import React from 'react';
import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';
import { Button } from '@components';

interface PaymentFormProps {
  clientSecret: string;
}

const PaymentForm: React.FC<PaymentFormProps> = ({ clientSecret }) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const result = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: 'https://example.com/order/123/complete',
      },
    });

    if (result.error) {
      console.error(result.error.message);
    } else {
      console.log('Payment successful');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      <Button additionalClass='secondary' label='Pay' type='submit' />
    </form>
  );
};

export default PaymentForm;
