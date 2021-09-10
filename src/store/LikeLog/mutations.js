export default {
  fetchLikeLogsCommit (state, data) {
    state.likeLogList = data
  },
  LikePosted (state, data) {
    state.likeLogList.push(data)
  }
}
