import express from "express";
import morgan from "morgan";
import { Signale } from "signale";
import * as dotenv from "dotenv";

import { supplierRouter } from "./inventory/infraestructura/routes/SupplierRouter";
import { productRouter } from "./inventory/infraestructura/routes/ProductRouter";

const app = express();
dotenv.config();
app.use(morgan("dev"));
app.use(express.json());

app.use("/productos", productRouter)
app.use("/proveedores", supplierRouter)

const port: string | undefined = process.env.PORT;
const signale = new Signale();

app.listen(3000, () => {
  signale.success("server listening on port:", port);
});

