import axios from "axios";
import { SERVER_URL } from "../../../constants/constants";

export const getProductById = async(id) => {
    try {
        const response = await axios.get(`${SERVER_URL}/products/${id}`);
        return response.data
        
    } catch (error) {
        console.error(`ошибка при загрузке продукта: ${error}`);
        throw error;
    }
}