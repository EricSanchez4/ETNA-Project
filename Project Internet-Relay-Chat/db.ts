import { createConnection } from "mysql2";
import * as dotenv from "dotenv";
dotenv.config();

let config: object = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
};

export const connection = createConnection(config);

try {
  connection.connect();
  console.log("\x1b[32m", "Connecté à la base de données MySQL!");
} catch (err) {
  console.log("Oups, something got wrong in a distant land!");
}
