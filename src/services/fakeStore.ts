import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const FAKESTORE_URL = process.env.FAKESTORE_URL;

export const getProducts = async () => {
    try {
        const response = await axios.get(`${FAKESTORE_URL}/products`);
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw new Error('Failed to fetch products');
    }
};

export const getProductById = async (id: string) => {
    try {
        const response = await axios.get(`${FAKESTORE_URL}/products/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching product ${id}:`, error);
        throw new Error('Failed to fetch product');
    }
};
