import { loadStripe } from '@stripe/stripe-js';
import { Elements, PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useState } from 'react';

interface StripeCheckoutProps {
    clientSecret: string;
    redirectUrl: string;
}

const stripePromise = loadStripe(process.env.NODE_STRIPE_PUBLICKEY || "stripe-public-key");


const options = {
    mode: 'payment' as const,
    amount: 1099,
    currency: 'usd',
    appearance: {
        theme: 'stripe' as const,
        variables: {
            colorPrimary: '#0570de',
            colorBackground: '#f6f9fc',
            colorText: '#30313d',
            colorDanger: '#df1b41',
            fontFamily: 'Ideal Sans, system-ui, sans-serif',
            spacingUnit: '2px',
            borderRadius: '4px',
        },
        rules: {
            '.Input': {
                borderColor: '#e0e6eb',
                color: '#30313d',
            },
            '.Label': {
                color: '#6b7c93',
            },
        },
    },
};

const StripeCheckout: React.FC<StripeCheckoutProps> = (props) => {
    const { clientSecret, redirectUrl } = props;

    const stripe = useStripe();
    const elements = useElements();
    const [loading, setLoading] = useState(false);
  
  
    const handleSubmit = async (event: React.FormEvent) => {
      event.preventDefault();
      if (!stripe || !elements) return;
  
      const { error: submitError } = await elements.submit();
      if (submitError?.message) {
        // Show error to your customer
        //console.log(submitError.message);
        return;
      }
  
      setLoading(true);
      const { error } = await stripe.confirmPayment({
        elements,
        clientSecret: clientSecret,
        confirmParams: {
          return_url: redirectUrl
        },
      });
  
      if (error) {
        console.error(error.message);
        setLoading(false);
      }
    };


    return (
        <div className='flex container mt-8'>
            <Elements stripe={stripePromise} options={options}>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 pt-4">
                    <PaymentElement />

                    {/* Mobile button (visible xs only) */}
                    <button
                        type="submit"
                        className="fixed bottom-4 left-1/2 z-50 w-4/5 max-w-[400px] -translate-x-1/2 rounded-md bg-blue-600 px-4 py-3 text-white shadow transition hover:bg-blue-700 md:hidden"
                    >
                        {loading ? <div className="h-6 w-6 animate-spin rounded-full border-4 border-white border-t-transparent"></div> : 'Pay Now'}
                    </button>

                    {/* Desktop button (hidden on mobile) */}
                    <div className="hidden w-full justify-center md:flex mt-2">
                        <button
                            type="submit"
                            className="w-1/2 rounded-md bg-blue-600 py-3 text-lg text-white transition hover:bg-blue-700 hover:scale-105"
                        >
                            {loading ? <div className="h-6 w-6 animate-spin rounded-full border-4 border-white border-t-transparent"></div> : 'Pay Now'}
                        </button>
                    </div>
                </form>

            </Elements>
        </div>
    );
};

export default StripeCheckout;