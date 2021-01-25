import * as functions from "firebase-functions";
import fetch from "node-fetch";

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript

exports.getPropertyList = functions.https.onCall(async data => {
  const response = await fetchProperties(data);

  return response;
});

exports.getProperty = functions.https.onCall(async data => {
  const response = await fetchProperties(data);
  const property = response.results[0];
  const pictures = property.pictures.map((picture: string) => {
    return {
      original: picture,
      thumbnail: picture,
    };
  });

  return {
    ...property,
    pictures,
  };
});

const fetchProperties = async (params: any) => {
  const urlParams = new URLSearchParams();

  for (const [key, value] of Object.entries<string>(params)) {
    urlParams.append(key, value);
  }

  const url = `${functions.config().witei.url}?${urlParams.toString()}`;

  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${functions.config().witei.key}`,
    },
  })
    .then(res => res.json())
    .catch(error => {
      functions.logger.error("Error", error);
    });

  return response;
};
