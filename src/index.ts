import express from "express";
import morgan from "morgan";
import { Signale } from "signale";
import * as dotenv from "dotenv";
import { query } from "./database/mysql";

const app = express();
dotenv.config();
app.use(morgan("dev"));
app.use(express.json());

const port: string | undefined = process.env.PORT;
const signale = new Signale();

app.listen(3000, () => {
  signale.success("server listening on port:", port);
});

const result = async () => {
 return await query("SELECT NOW()", []);
};
signale.success(result);
