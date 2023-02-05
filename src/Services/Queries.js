import { databases } from "../appwrite/appwrite";
import { Query } from "appwrite";

export const getQuery = () => {
  return databases
    .listDocuments("63def5cb19e2e8eeca7b", "63def5d2418422aed44a", [
      Query.limit(Math.floor(Math.random() * 10) + 1),
    ])
    .then(
      function (res) {
        return res;
      },
      function (err) {
        console.log(err);
      }
    );
};
