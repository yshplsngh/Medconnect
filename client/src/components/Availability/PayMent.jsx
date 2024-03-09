import React, { useEffect } from 'react';

function RazorpayPaymentButton() {
  useEffect(() => {
    // Create a script element
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/payment-button.js';
    script.async = true;

    // Set the data-payment_button_id attribute to your Razorpay payment button ID
    script.setAttribute('data-payment_button_id', 'pl_Mfsiy1x3X839Ph'); // Replace with your actual button ID

    // Find the form element by its ID or another appropriate selector
    const form = document.getElementById('razorpay-payment-form'); // Replace with your form's ID

    // Append the script to the form element
    form.appendChild(script);

    // Clean up the script element on component unmount (optional)
    return () => {
      form.removeChild(script);
    };
  }, []);

  return (
    <div style={{ marginTop: "10rem", marginLeft: "15rem" }}>
      <h1>Med-Connect Payment</h1>

      <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '5px' }}>
        <h2>Make a Payment</h2>
        <form id="razorpay-payment-form">
          {/* The Razorpay Payment Button script will be inserted here */}
        </form>
      </div>
    </div>
  );
}

export default RazorpayPaymentButton;