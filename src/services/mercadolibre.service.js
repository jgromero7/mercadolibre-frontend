import axios from 'axios'
import envs from '../constants/envs'
const urlApi = `${envs.BASE_URL}api/items`

class MercadoLibreService {

    search(query) {
        return axios.get(`${urlApi}?q=${query}`)
            .then(({data}) => data)
            .catch((err) => {
                throw new Error(err)
            });
    }

    getItem(id) {
        return axios.get(`${urlApi}/${id}`)
            .then(({data}) => data)
            .catch((err) => {
                throw new Error(err)
            });
    }

}

export default new MercadoLibreService()