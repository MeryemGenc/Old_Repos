// domain/.netlify/functions/create-payment-intent
//ntl dev

exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: "payment intent",
  };
};
