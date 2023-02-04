import { databases } from "../appwrite/appwrite";
import { Query } from "appwrite";

export const getQuery = () => {
  return databases
    .listDocuments("63dd97fcc07889de33ba", "63dd9816dbb6d29091ae", [
      Query.limit(Math.floor(Math.random() * 10) + 1),
    ])
    .then(
      function (res) {
        console.log(res);
      },
      function (err) {
        console.log(err);
      }
    );
};
