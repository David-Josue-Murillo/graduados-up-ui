import api from "./api"
import { graduatesCache } from "../cache/DataCache";

export const fetchAllGraduates = async (forceRefresh = false) => {
    // Verificar caché primero
    const cachedData = graduatesCache.getData();
    if (!forceRefresh && cachedData) {
        return cachedData;
    }

    try {
        // Realizar una única petición al nuevo endpoint
        const response = await api.get('/graduates-all');
        const allData = response.data.data; // Asumiendo que la estructura es { data: [...] }

        // Guardar en caché antes de retornar
        graduatesCache.setData(allData);
        return allData;

    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};