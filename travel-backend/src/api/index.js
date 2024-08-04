import axios from "../utils/request.js";
import base from "./base.js";


axios.defaults.headers.post['Content-Type'] = 'application/json';
// axios.defaults.withCredentials=true;

const api = {
    postLogin(params) {
        return axios.post('/api' + base.getLogin, params, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        })
    },
    getProductPages(params) {
        return axios.get('/api' + base.getProducts, {
            params
        })
    },
    getCategory(params){
        return axios.get('/api' + base.getCategry,{
            params
        })
    },
    postUpdateCategory(params){
        return axios.post('/api'+base.updateCategory,params)
    },
    postDeleteCategory(params){
        return axios.post('/api'+base.deleteCategory+params)
    },
}

export default api; 