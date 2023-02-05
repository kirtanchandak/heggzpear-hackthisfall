import { databases } from "../appwrite/appwrite";

export const getDiets = () => {
  return databases
    .listDocuments("63def5cb19e2e8eeca7b", "63def5d2418422aed44a")
    .then(
      function (response) {
        return response;
      },
      function (error) {
        console.log(error); // Failure
      }
    );
};
