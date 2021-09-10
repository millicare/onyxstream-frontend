import axios from "axios"
const API_URL = 'http://localhost:8001/api/'
export default {
    contactUs(context, data) {
        axios.post(API_URL + 'contact-us', data).then(
            response => {
                return new Promise((resolve, reject) => {
                    resolve()
                })
            }
        )
    },
    resetPasswordRequest(context, data) {
        axios.post(API_URL + 'reset-password-request', data).then(
            response => {
                return new Promise((resolve, reject) => {
                    resolve()
                })
            }
        )
    },
    resetPassword(context, data) {
        axios.post(API_URL + 'change-password1', data).then(
            response => {
                return new Promise((resolve, reject) => {
                    resolve()
                })
            }
        )
    },
    payWithStripe(context, data) {
        return axios.post(API_URL + 'payment/add-funds/stripe', data).then(
            response => {
                console.log(response)
                return new Promise((resolve, reject) => {
                    resolve(response.data)
                })  
            }
        )
    }
} 

