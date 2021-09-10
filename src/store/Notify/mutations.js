export default {

  fetchNotifiesCommit (state, data) {
    state.notifyList = data
  },
  receiveNewCommit (state, payload) {
    state.notifyList.push({
      title: payload.notification.title,
      body: payload.notification.body,
      icon: payload.notification.icon,
      link: payload.data.link,
      pushed_at: payload.data.pushed_at
    })
  },
  confirmCommit (state, data) {
    function MatchRule(item) {
      return item.pushed_at == this
    }
    const target = state.notifyList.findIndex(MatchRule, data.pushed_at)
    state.notifyList.splice(target, 1)
  }
}
