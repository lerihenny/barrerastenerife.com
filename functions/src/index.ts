import * as functions from "firebase-functions";
import fetch from "node-fetch";

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript

exports.getPropertyList = functions.https.onCall(async (data, context) => {
  let response;

  await fetch(functions.config().witei.url, {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${functions.config().witei.key}`,
    },
  })
    .then(res => res.json())
    .then(data => {
      response = data;
      return data;
    })
    .catch(error => {
      functions.logger.error("Error", error);
      response = error;
      return error;
    });

  return { response };
});

exports.getProperty = functions.https.onCall(async (data, context) => {
  const { identifier } = data;
  let response;

  await fetch(functions.config().witei.url + "/?identifier=" + identifier, {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${functions.config().witei.key}`,
    },
  })
    .then(res => res.json())
    .then(res => {
      response = res;
      return response;
    })
    .catch(error => {
      functions.logger.error("Error", error);
      response = error;
      return response;
    });

  return { response };
});
