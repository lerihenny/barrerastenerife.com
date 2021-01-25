import React, { useContext, useEffect, useState } from "react";
import firebase from "gatsby-plugin-firebase";
import { Property } from "../models/Property";
import { Search } from "../models/Search";

const RepositoryContext = React.createContext([]);

export const RepositoryProvider: React.FC<any> = ({ value, children }) => {
  return (
    <RepositoryContext.Provider value={value}>
      {children}
    </RepositoryContext.Provider>
  );
};

export const useRepository = () => {
  const context = useContext(RepositoryContext);

  if (context === null) {
    throw new Error("useRepository must be used within an RepositoryProvider");
  }

  return {
    ...context,
    getPropertyList,
    getProperty,
  };
};

const getPropertyList = (data: Search = {}): Property[] => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const emulator = firebase.functions();

    if (process.env.NODE_ENV === "development") {
      emulator.useEmulator("localhost", 5001);
    }

    const getProperties = emulator.httpsCallable("getPropertyList");

    getProperties({
      ...data,
      status: "available",
      sort_by: "creation_date_desc",
    })
      .then(response => setProperties(response.data.results))
      .catch(error => console.log("Error", error));
  }, []);

  return properties;
};

const getProperty = ({
  identifier,
}: {
  identifier: string | null;
}): Property | undefined => {
  const [property, setProperty] = useState<Property>();

  useEffect(() => {
    const emulator = firebase.functions();

    if (process.env.NODE_ENV === "development") {
      emulator.useEmulator("localhost", 5001);
    }

    const getProperty = emulator.httpsCallable("getProperty");

    getProperty({ identifier })
      .then(response => {
        setProperty(response.data);
      })
      .catch(error => console.log("Error", error));
  }, [identifier]);

  return property;
};
