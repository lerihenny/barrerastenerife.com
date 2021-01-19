import * as functions from "firebase-functions";
import fetch from "node-fetch";

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript

export const getPropertyList = functions.https.onRequest(
  (request, response) => {
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Methods", "GET");
    response.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );

    fetch(functions.config().witei.url, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${functions.config().witei.key}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        response.status(200).send({
          data,
        });
      })
      .catch((error) => {
        response.status(200).send({
          error,
        });
      });
  }
);

exports.getProperty = functions.https.onCall(async (data, context) => {
  const {identifier} = data;
  let response;

  await fetch(functions.config().witei.url + "/?identifier=" + identifier, {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${functions.config().witei.key}`,
    },
  })
    .then((res) => res.json())
    .then((res) => {
      response = res;
      return response;
    })
    .catch((error) => {
      functions.logger.error("Error", error);
      response = error;
      return response;
    });

  return {
    response,
  };
});
