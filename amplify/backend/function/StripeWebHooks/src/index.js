/* Amplify Params - DO NOT EDIT
	ENV
	REGION
Amplify Params - DO NOT EDIT */exports.handler = async event => {
  const body = JSON.parse(event.body);

  // Handle the event
  switch (body.type) {
    case 'account.updated':
      const accountUpdated = body.data.object;
      console.log('accountUpdated created!', accountUpdated);
      break;
    case 'payment_intent.created':
      const paymentCreated = body.data.object;
      console.log('PaymentIntent created!', paymentCreated);
      break;
    case 'payment_intent.succeeded':
      const paymentIntent = body.data.object;
      // update database and set trip to successful
      console.log('PaymentIntent was successful!', paymentIntent);
      break;
    case 'payment_method.attached':
      const paymentAttached = body.data.object;
      console.log('PaymentMethod was attached to a Customer!', paymentAttached);
      break;
    case 'payment_intent.canceled':
      const paymentCanceled = body.data.object;
      console.log('Payment was canceled!', paymentCanceled);
      break;
    case 'payment_intent.payment_failed':
      const paymentFailed = body.data.object;
      console.log('Payment failed!', paymentFailed);
      break;
    case 'payment_intent.processing':
      const paymentProcess = body.data.object;
      console.log('Payment processing!', paymentProcess);
      break;
    case 'payment_intent.requires_action':
      const paymentAction = body.data.object;
      console.log('Payment requires action!', paymentAction);
      break;
    case 'refund.created':
      const refundCreated = body.data.object;
      console.log('refund created!', refundCreated);
      break;
    case 'refund.updated':
      const refundUpdated = body.data.object;
      console.log('refund updated!', refundUpdated);
      break;
    case 'charge.refunded':
      const chargeRefunded = body.data.object;
      console.log('charge refunded!', chargeRefunded);
      break;
    // ... handle other event types
    default:
      console.log(`Unhandled event type ${body.type}`);
  }

  // TODO implement
  const response = {
    statusCode: 200,
    //  Uncomment below to enable CORS requests
    //  headers: {
    //      "Access-Control-Allow-Origin": "*",
    //      "Access-Control-Allow-Headers": "*"
    //  },
    body: JSON.stringify({received: true}),
  };

  return {response};
};
