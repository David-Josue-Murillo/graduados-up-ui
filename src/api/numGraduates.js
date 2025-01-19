import api from "./api"
import { graduatesCache } from "../cache/DataCache";

export const fetchAllGraduates = async (forceRefresh = false) => {

    const cachedData = graduatesCache.getData();
    if(!forceRefresh && cachedData) {
        return cachedData;
    }

    let allData = [];
    let currentPage = 1;
    const limit = 15;
    let hasMore = true;

    try {
        while (hasMore) {
            const response = await api.get(`/graduates?page=${currentPage}&limit=${limit}`);
            const { data } = response; // Asegúrate de que esta estructura coincide con la API

            allData = [...allData, ...data.data]; // Combina los datos
            hasMore = data.data.length === limit; 
            currentPage++;
        }

        graduatesCache.setData(allData);
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
    
    return allData;
};

