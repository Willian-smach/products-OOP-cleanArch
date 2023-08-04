import express from "express";
import { Router } from "express";
import cors from 'cors';
import { ExpressAdapter } from "../../adapters/ExpressAdapter";
import { ProductController } from "../../controllers/ProductController";

const app = express();
const PORT = 3005;
const routes = Router();

app.use(cors());
app.use(express.json());
app.use(routes);

// Rotas de produto
routes.post("/product", ExpressAdapter.create(ProductController.newProduct));
routes.get("/product/:id", ExpressAdapter.create(ProductController.listProducts));
routes.get("/products/:id", ExpressAdapter.create(ProductController.productInfo));

app.listen(PORT, () => {
    console.log(`Express run on port: ${PORT}`);
});
