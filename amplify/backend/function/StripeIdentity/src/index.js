/* Amplify Params - DO NOT EDIT
	ENV
	REGION
Amplify Params - DO NOT EDIT *//**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

const stripe = require('stripe')(
  'sk_test_51MdxGXHzF6NKvTnpfRMEQr7sfWFw0OF850NXop4vmmMQ6KmL02T0yGheleSYhjWP2JG04eb3sKmyhuB84uuaWexm00WGZLk5z3',
);

const restrictedApiKey = require('stripe')(
  'rk_test_51MdxGXHzF6NKvTnpvg7bxNwZLmZBtoUbnMpLVTxUF0bL3UwN7HofHhtSiKWjMKbUm2aFlmBLYTlqKpob5J2itBVG00XzdXD0uH',
);

// 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

exports.handler = async event => {
  const {customerId, options} = event.arguments;

  console.log('customer ID', customerId);

  const verificationSession = await stripe.identity.verificationSessions.create(
    {
      type: 'document',
      metadata: {
        user_id: customerId,
      },
    },
  );

  const retrieveSession =
    await restrictedApiKey.identity.verificationSessions.retrieve(
      verificationSession.id,
      {
        expand: ['verified_outputs'],
      },
    );

  console.log('RETRIEVE SESSION', retrieveSession);

  // Create an ephemeral key for the VerificationSession
  const ephemeralKey = await stripe.ephemeralKeys.create(
    {verification_session: verificationSession.id},
    {apiVersion: '2022-11-15'},
  );

  // Return only the ID and ephemeral key secret to the frontend.
  const verificationSessionId = verificationSession.id;
  const ephemeralKeySecret = ephemeralKey.secret;

  return {
    ephemeralKeySecret,
    verificationSessionId,
  };
};
