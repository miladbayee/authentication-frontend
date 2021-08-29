import axios from 'axios'

axios.defaults.withCredentials=true
axios.defaults.baseURL=process.env.REACT_APP_API

export const post = (endPoint,params,config={}) => {
    return axios.post(endPoint,params,config)
}

export const get = (endPoint, config = {}) => {
    return axios.get(endPoint, config)
}
