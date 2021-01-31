import React from "react";
import { Search } from "./models/Search";
import firebase from "gatsby-plugin-firebase";

export const imageSetBySize = (string: string, size: string) => {
  const array = string.split(",\n").find(image => image.endsWith(size));

  return array?.split(" ")[0];
};

export const formatPrice = (price: number) => {
  // Create our number formatter.
  const formatter = new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",

    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });

  return formatter.format(price);
};

export const getPropertyList = (data: Search) => {
  const emulator = firebase.functions();

  if (process.env.NODE_ENV === "development") {
    emulator.useEmulator("localhost", 5001);
  }

  const getProperties = emulator.httpsCallable("getPropertyList");

  return getProperties({
    ...data,
    status: "available",
    // sort_by: "creation_date_desc",
  }).catch(error => console.log("Error", error));
};

export const sendMail = (data: {
  name: string;
  email: string;
  message: string;
}) => {
  const emulator = firebase.functions();

  if (process.env.NODE_ENV === "development") {
    emulator.useEmulator("localhost", 5001);
  }

  const sendMail = emulator.httpsCallable("sendMail");

  return sendMail(data).catch(error => console.log("Error", error));
};
