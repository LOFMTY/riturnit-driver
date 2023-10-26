/* Amplify Params - DO NOT EDIT
	ENV
	REGION
Amplify Params - DO NOT EDIT */exports.handler = async event => {
  const body = JSON.parse(event.body);

  switch (event.type) {
    case 'identity.verification_session.verified': {
      // All the verification checks passed
      const verificationSession = event.data.object;
      console.log('Verification is verified: ' + verificationSession);
      break;
    }

    case 'identity.verification_session.requires_input': {
      // At least one of the verification checks failed
      const verificationSession = event.data.object;

      console.log(
        'Verification check failed: ' + verificationSession.last_error.reason,
      );

      // Handle specific failure reasons
      switch (verificationSession.last_error.code) {
        case 'document_unverified_other': {
          const docInvalid = verificationSession.last_error.reason;
          console.log('Document was invalid', docInvalid);
          break;
        }
        case 'document_expired': {
          // The document was expired
          const docExpired = verificationSession.last_error.reason;
          console.log('Document Expired', docExpired);
          break;
        }
        case 'document_type_not_supported': {
          // document type not supported
          const docNotSupport = verificationSession.last_error.reason;
          console.log('Document Not Supported', docNotSupport);
          break;
        }
        default: {
          console.log(`Unhandled event type ${body.type}`);
        }
      }
    }
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
