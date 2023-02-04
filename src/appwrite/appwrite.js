import { Client, Account, Databases } from "appwrite";

const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("63deec4664edd9843701");

export const account = new Account(client);

//Databse

export const databases = new Databases(client);
