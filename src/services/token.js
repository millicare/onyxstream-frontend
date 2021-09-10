import jwt_decode from 'jwt-decode'
export default {
    getToken () {
        let token = localStorage.getItem('token')
        return token
    },
    setToken (token) {
        localStorage.setItem('token', token)
    },
    isValidToken () {
        let token = this.getToken()
    }
}