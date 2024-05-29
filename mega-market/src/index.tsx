import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@App.tsx'
import './styles/main.css'
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_123');


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)


ReactDOM.createRoot
root.render(
  <React.StrictMode >
    <Elements stripe={stripePromise}>
      <App />
    </Elements>,
  </React.StrictMode>
)
