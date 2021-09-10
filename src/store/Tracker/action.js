import axios from "axios"
import { BIconCloudDownload } from "bootstrap-vue"
import authHeader from '../../services/auth-header'
const API_URL = 'http://localhost:8001/api/'
export default {
    async visit(context) {
        const response = await axios.post(API_URL + 'visit', {})
        localStorage.setItem('visited', true)
        return new Promise((resolve, reject) => {
            context.commit('visited')
            resolve()
        })
    },
    async view(context, payload) {
        const response = await axios.post(API_URL + 'view', payload, {headers: authHeader()})
        return new Promise((resolve, reject) => {
            resolve()
        })
    },
    async download(context, payload) {
        const response = await axios.post(API_URL + 'download', payload, {headers: authHeader()})
        return new Promise((resolve, reject) => {
            resolve()
        })
    }
}

