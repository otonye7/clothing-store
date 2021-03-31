import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HcI1yLJTPkBIuj37YATa3e1cOTM0UzSvsjBgTfn4nSPSB4GIjB3CM9X1EF1xta80V6xX22bnuGm6BBpF0hKMNq7007v80YLm4';

    const onToken = token => {
        console.log(token);
        alert('Payment Sucessful');
    }

    return (
        <StripeCheckout 
        label = 'Pay Now'
        name = 'S^MO STORE'
        billingAddress
        shippingAddress
        image= 'https://s3.amazonaws.com/s3.timetoast.com/public/uploads/photos/8404960/Screenshot_2016-05-12_at_12.00.45_PM.png'
        description={`Your total is ${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
        />
    )
};

export default StripeCheckoutButton;