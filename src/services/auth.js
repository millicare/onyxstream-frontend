import axios from 'axios'
import authHeader from './auth-header'
import Token from './token'
const API_URL = 'http://localhost:8001/api/auth/'
export default {
  login (user) {
    return axios
        .post(API_URL + 'signin', {
          email: user.email,
          password: user.password
        })
        .then(response => {
          if (response.data.success && response.data.access_token) {
            localStorage.setItem('user', JSON.stringify(response.data.user))
            localStorage.setItem('token', JSON.stringify(response.data.access_token))
          }
          return response.data
        })
  },
  logout() {
    return axios
          .post(API_URL + 'logout', {}, {headers: authHeader()})
          .then(response => {
            localStorage.removeItem('user')
            localStorage.removeItem('token')
            return response.data
          })
  },
  register (user) {
    return axios.post(API_URL + 'signup', {
      name: user.name,
      email: user.email,
      password: user.password,
      password_confirmation: user.password_confirmation
    })
  },
  refresh () {
    return axios
          .post(API_URL + 'refresh', {}, {headers: authHeader()})
          .then(response => {
            if (response.data.success && response.data.access_token) {
              localStorage.setItem('user', JSON.stringify(response.data.user))
              localStorage.setItem('token', JSON.stringify(response.data.access_token))
            }
            return response.data
          })
  },
  expired () {
    return axios  
          .post(API_URL + 'expired', {}, {headers: authHeader()})
          .then(response => {
            localStorage.removeItem('user')
            localStorage.removeItem('token')
            return response.data
          })
  },
  updateProfile (profile) {
    return axios
          .post(API_URL + 'user-profile-update', profile, {headers: {...authHeader(), ...{'Content-Type': 'multipart/form-data'}}})
          .then(response => {
            var user = JSON.parse(localStorage.getItem('user'))
            user.profile = response.data
            localStorage.setItem('user', JSON.stringify(user))
            return response.data
          })
  },
  changePassword (data) {
    return axios
          .post(API_URL + 'change-password',  data, {headers: authHeader()})
          .then(response => {
            return response.data
          })
  },
  changeEmail (data) {
    return axios
          .post(API_URL + 'change-email',  data, {headers: authHeader()})
          .then(response => {
            var user = JSON.parse(localStorage.getItem('user'))
            user.email = response.data
            localStorage.setItem('user', JSON.stringify(user))
            return response.data
          })
  },
  upgradeMembership (data) {
    return axios
          .post(API_URL + 'upgrade-membership', data, {headers: authHeader()})
          .then(response => {
            return response.data
          })
  },
  saveDeviceToken (data) {
    return axios  
          .post(API_URL + 'save-device-token', data, {headers: authHeader()})
          .then(response => {
            return response.data
          })
  }
}
