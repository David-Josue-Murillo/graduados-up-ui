import api from "./api"

const fetchAllGraduates = async () => {
    try {
        const response = await api.get('/graduates')
        return response.data;
    } catch (error) {
        console.error('Error fetching graduates: ', error);
        throw error;
    }
}

export {
    fetchAllGraduates
}
