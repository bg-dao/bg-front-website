export const state = () => ({
  isMobile: false,
})

export const mutations = {
  SET_IS_MOBILE(state, data) {
    state.isMobile = data
  },
}

export const actions = {
  setIsMobile(store, data) {
    store.commit("SET_IS_MOBILE", data)
  },
}
