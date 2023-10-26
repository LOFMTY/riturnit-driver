/* Amplify Params - DO NOT EDIT
	ENV
	REGION
Amplify Params - DO NOT EDIT *//**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

const stripe = require('stripe')(
  'sk_test_51MdxGXHzF6NKvTnpfRMEQr7sfWFw0OF850NXop4vmmMQ6KmL02T0yGheleSYhjWP2JG04eb3sKmyhuB84uuaWexm00WGZLk5z3',
);

exports.handler = async event => {
  const {typeName, arguments} = event;

  if (typeName !== 'Mutation') {
    throw new Error('Request is not a mutation');
  }

  if (!arguments?.amount) {
    throw new Error('Amount argument is required');
  }

  const customer = await stripe.customers.create({
    email: arguments.email,
    name: arguments.name,
    address: arguments.address,
    phone: arguments.phone,
    shipping: arguments.shipping,
  });

  // create payment intent
  const paymentIntent = await stripe.paymentIntents.create({
    amount: arguments.amount,
    currency: 'usd',
    customer: customer.id,
    setup_future_usage: 'on_session',
    automatic_payment_methods: {
      enabled: true,
    },
  });

  const ephemeralKey = await stripe.ephemeralKeys.create(
    {customer: customer.id},
    {apiVersion: '2022-11-15'},
  );

  const setupIntent = await stripe.setupIntents.create({
    customer: customer.id,
    // payment_method:
  });

  // console.log('CUSTOMER', customer);
  // console.log('paymentIntent', paymentIntent);
  // console.log('setupIntent', setupIntent);
  // console.log('ephemeralKey', ephemeralKey);

  return {
    clientSecret: paymentIntent.client_secret,
    ephemeralKey: ephemeralKey.secret,
    setupIntent: setupIntent.client_secret,
    customer: customer.id,
    publishableKey:
      'pk_test_51MdxGXHzF6NKvTnp9C5pMkvEslDVtNpjfNcmA64so2uSdx9FgYLomEjWF3JuwDJ2BpZZAgyKDoPr2qw6OFzhwaX600YRCmLfGL',
  };
};
