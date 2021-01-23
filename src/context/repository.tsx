import React, { useContext, useEffect, useState } from "react";
import firebase from "gatsby-plugin-firebase";
import { Property } from "../models/Property";

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
    properties: getPropertyList(),
    getProperty,
  };
};

const getPropertyList = (): Property[] => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const test = firebase.functions().httpsCallable("getPropertyList");

    test()
      .then(response => setProperties(response.data.response.results))
      .catch(error => console.log("Error", error));
  }, []);

  return properties;
};

const getProperty = ({
  identifier,
}: {
  identifier: string;
}): Property | undefined => {
  const [property, setProperty] = useState<Property>();

  useEffect(() => {
    const test = firebase.functions().httpsCallable("getProperty");

    test({ identifier })
      .then(response => {
        const data = response.data.response.results[0];
        const pictures = data.pictures.map((picture: string) => {
          return {
            original: picture,
            thumbnail: picture,
          };
        });

        setProperty({
          ...data,
          pictures,
        });
      })
      .catch(error => console.log("Error", error));
  }, [identifier]);

  return property;
};
