const axios = window.axios;

const BASE_API_URL = 'http://192.168.1.5/api'


export default {
    getAllNames: () => 
        axios.get(`${BASE_API_URL}/names`),
    getOneName: (id) => 
        axios.get(`${BASE_API_URL}/names/${id}/edit`),
    addName: (name) => 
        axios.post(`${BASE_API_URL}/names`, name),
    updateName: (name, id) => 
        axios.put(`${BASE_API_URL}/names/${id}`, name),
    deleteName: (id) =>
        axios.delete(`${BASE_API_URL}/names/${id}`)
};