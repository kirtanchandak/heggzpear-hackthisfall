import { Client, Account, Databases } from "appwrite";
import { Query } from "appwrite";

const client = new Client();

client.setEndpoint("http://localhost/v1").setProject("63dd7ecbb4daf612bb7a");

export const account = new Account(client);

//Databse

export const databases = new Databases(client);
