import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const VIACEP_URL = process.env.VIACEP_URL;

export const getAddressByCep = async (cep: string) => {
    try {
        const response = await axios.get(`${VIACEP_URL}/${cep}/json/`);
        if (response.data.erro) {
            throw new Error('CEP not found');
        }
        return response.data;
    } catch (error) {
        console.error(`Error fetching address for CEP ${cep}:`, error);
        throw error;
    }
};
