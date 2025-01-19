import api from "./api"
import { graduatesCache } from "../cache/DataCache";

const BATCH_SIZE = 5; // Número de peticiones simultáneas
const LIMIT = 50;     // Aumentamos el límite por petición

export const fetchAllGraduates = async (forceRefresh = false) => {
    // Verificar caché primero
    const cachedData = graduatesCache.getData();
    if (!forceRefresh && cachedData) {
        return cachedData;
    }

    let allData = [];
    let currentPage = 1;
    let hasMore = true;

    try {
        while (hasMore) {
            // Crear un batch de promesas para peticiones simultáneas
            const batchPromises = [];
            
            // Preparar múltiples peticiones
            for (let i = 0; i < BATCH_SIZE && hasMore; i++) {
                batchPromises.push(
                    api.get(`/graduates?page=${currentPage + i}&limit=${LIMIT}`)
                        .then(response => response.data)
                );
            }

            // Ejecutar las peticiones en paralelo
            const batchResponses = await Promise.all(batchPromises);

            // Procesar las respuestas
            let batchData = [];
            for (const response of batchResponses) {
                if (response.data.length < LIMIT) {
                    hasMore = false;
                }
                batchData = [...batchData, ...response.data];
            }

            // Agregar los datos del batch al resultado final
            allData = [...allData, ...batchData];
            currentPage += BATCH_SIZE;

            // Si el último batch está incompleto, terminar
            if (batchData.length < BATCH_SIZE * LIMIT) {
                hasMore = false;
            }
        }

        // Guardar en caché antes de retornar
        graduatesCache.setData(allData);
        return allData;

    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};