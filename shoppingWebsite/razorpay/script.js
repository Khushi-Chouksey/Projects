document.getElementById('paymentForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    var options = {
      key: 'YOUR_RAZORPAY_KEY',
      amount: document.getElementById('paymentForm').amount.value,
      currency: document.getElementById('paymentForm').currency.value,
      name: document.getElementById('paymentForm').name.value,
      description: document.getElementById('paymentForm').description.value,
      handler: function(response) {
        // Handle the payment success callback
        alert('Payment successful!');
      },
      prefill: {
        email: document.getElementById('paymentForm').email.value,
        contact: document.getElementById('paymentForm').contact.value
      },
      theme: {
        color: '#F37254'
      }
    };
    
    var rzp = new Razorpay(options);
    rzp.open();
  });
  