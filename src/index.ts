import express from 'express';
import cors from 'cors';
import { getProducts, getProductById } from './services/fakeStore';
import { getAddressByCep } from './services/viaCep';

const app = express();
const PORT = process.env.PORT || 3002;

app.use(cors());
app.use(express.json());

app.get('/products', async (req, res) => {
    try {
        const products = await getProducts();
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch products' });
    }
});

app.get('/products/:id', async (req, res) => {
    try {
        const product = await getProductById(req.params.id);
        res.json(product);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch product' });
    }
});

app.get('/address/:cep', async (req, res) => {
    try {
        const address = await getAddressByCep(req.params.cep);
        res.json(address);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch address' });
    }
});

app.listen(PORT, () => {
    console.log(`Secondary API running on port ${PORT}`);
});
