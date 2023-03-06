export const state = () => ({
  isMobile: false,
  navList: [{
    name: 'Home',
    router: '',
    routeName: 'index'
  },{
    name: 'BG-AI',
    router: '',
    routeName: 'index2'
  },{
    name: 'BG-NFT',
    router: '',
    routeName: 'index3'
  },{
    name: 'BG-Social',
    router: '',
    routeName: 'index4'
  }]
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
