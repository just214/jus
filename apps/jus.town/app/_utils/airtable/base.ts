import Airtable from "airtable";
import dotenv from "dotenv";

dotenv.config();

export const base = new Airtable({ apiKey: process.env.AIRTABLE_TOKEN }).base(
  process.env.AIRTABLE_BASE_ID!
);
