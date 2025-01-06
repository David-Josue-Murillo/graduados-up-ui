import api from "./api"

const fetchAllGraduates = async () => {

    let allData = [];
    let currentPage = 1;
    const limit = 15;
    let hasMore = true;

    try {
        while (hasMore) {
            const response = await api.get(`/graduates?page=${currentPage}&limit=${limit}`);
            const { data } = response; // Asegúrate de que esta estructura coincide con la API

            allData = [...allData, ...data.data]; // Combina los datos
            hasMore = data.data.length === limit; // Si la página tiene menos datos, significa que es la última
            currentPage++; // Pasa a la siguiente página
        }
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }

    return allData;
};

export {
    fetchAllGraduates
}
