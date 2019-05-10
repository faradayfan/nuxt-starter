export const state = () => ({
  serverStatus: {}
})

export const actions = {
  getStatus({ commit }) {
    this.$api.health().then(status => {
      commit('SET_STATUS', status)
    })
  }
}

export const mutations = {
  SET_STATUS(state, payload) {
    state.serverStatus = payload
  }
}
