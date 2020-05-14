import * as functions from "firebase-functions";

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// eslint-disable-next-line import/prefer-default-export
export const helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase!");
});
