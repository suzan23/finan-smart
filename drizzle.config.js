import dotenv from "dotenv";
dotenv.config({ path: ".env.local" }); // Explicitly load the .env.local file

console.log(process.env.NEXT_PUBLIC_DATABASE_URL);
export default {
  dialect: "postgresql",
  schema: "./utils/schema.jsx",
  out: "./drizzle",
  dbCredentials: {
    url: process.env.NEXT_PUBLIC_DATABASE_URL,
    connectionString: process.env.NEXT_PUBLIC_DATABASE_URL,
  },
};
