const state = {
  user: null
}

const mutations = {
  SET_USER (state, user) {
    state.user = user
  }
}

const actions = {
  login ({ commit }, user) {
    // do something async
    commit('SET_USER', user)
    localStorage.setItem('user', user)
    return Promise.resolve(user)
  },
  logout ({ commit }) {
    commit('SET_USER', null)
    localStorage.removeItem('user')
    return Promise.resolve(null)
  },
  register ({ dispatch }, user) {
    dispatch('login', user)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
