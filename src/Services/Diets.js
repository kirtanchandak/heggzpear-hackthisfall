import { databases } from "../appwrite/appwrite";

export const getDiets = () => {
  return databases
    .listDocuments("63dd97fcc07889de33ba", "63dd9816dbb6d29091ae")
    .then(
      function (response) {
        return response;
      },
      function (error) {
        console.log(error); // Failure
      }
    );
};
