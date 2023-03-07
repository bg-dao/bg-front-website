export const state = () => ({
  isMobile: false,
  navList: [{
    name: 'Home',
    router: '/',
    routeName: 'index'
  },{
    name: 'BG-AI',
    router: '/ai',
    routeName: 'ai'
  },{
    name: 'BG-NFT',
    router: '/nft',
    routeName: 'nft'
  },{
    name: 'BG-Social',
    router: '/social',
    routeName: 'social'
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
