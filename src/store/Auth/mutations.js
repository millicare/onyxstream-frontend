export default {
  loginSuccess(state, user) {
    state.status.loggedIn = true
    state.user = user
  },
  loginFailure(state) {
    state.status.loggedIn = false
    state.user = null
  },
  logout(state) {
    state.status.loggedIn = false
    state.user = null
  },
  registerSuccess(state) {
    state.status.loggedIn = false
  },
  registerFailure(state) {
    state.status.loggedIn = false
  },
  profileUpdated(state, profile) {
    state.user.profile = profile
  },
  emailChanged(state, email) {
    state.user.email = email
  },
  membershipUpgraded(state, memship) {
    state.user.memship = memship
  }
}
  