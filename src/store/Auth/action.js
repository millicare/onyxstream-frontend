import axios from "axios"
import AuthService from '../../services/auth'

export default {
    login(context, user) {
        return AuthService.login(user).then(
            response => {
                return new Promise((resolve, reject) => {
                    if (response.success)
                        context.commit('loginSuccess', response.user)
                    resolve(response)
                })
            },
            error => {
                return new Promise((resolve, reject) => {
                    context.commit('loginFailure', response.user)
                    resolve()
                })
            }
        )
    },
    logout(context) {
        return AuthService.logout().then(
           response => {
                return new Promise((resolve, reject) => {
                    context.commit('logout')
                    resolve()
                })
            }
        )
    },
    register(context, user) {
        return AuthService.register(user).then(
            response => {
                return new Promise((resolve, reject) => {
                    context.commit('registerSuccess')
                    resolve()
                })
            },
            error => {
                return new Promise((resolve, reject) => {
                    context.commit('registerFailure')
                    resolve()
                })
            }
        )
    },
    refresh(context) {
        return AuthService.refresh().then(
            response => {
                return new Promise((resolve, reject) => {
                    resolve()
                })
            }
        )
    },
    expired(context) {
        return AuthService.expired().then(
            response => {
                return new Promise((resolve, reject) => {
                    context.commit('logout')
                    resolve()
                })
            }
        )
    },
    updateProfile(context, profile) {
        return AuthService.updateProfile(profile).then(
            profile => {
                return new Promise((resolve, reject) => {
                    context.commit('profileUpdated', profile)
                    resolve()
                })
            }
        )
    },
    changePassword(context, data) {
        return AuthService.changePassword(data).then(
            response => {
                return new Promise((resolve, reject) => {
                    resolve()
                })
            }
        )
    },
    changeEmail(context, data) {
        return AuthService.changeEmail(data).then(
            response => {
                return new Promise((resolve, reject) => {
                    context.commit('emailChanged', response)
                    resolve()
                })
            }
        )
    },
    upgradeMembership(context, data) {
        return AuthService.upgradeMembership(data).then(
            response => {
                return new Promise((resolve, reject) => {
                    context.commit('membershipUpgraded', response)
                    resolve(response)
                })
            }
        )
    },
    saveDeviceToken(context, data) {
        return AuthService.saveDeviceToken(data).then(
            response => {
                return new Promise((resolve, reject) => {
                    resolve(response)
                })
            }
        )
    }
}
