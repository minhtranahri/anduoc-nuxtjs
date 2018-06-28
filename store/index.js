import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      key: '',
      loaded: false
    },
    mutations: {
      modifiedKey (state, newKey) {
        state.key = newKey;
      },
      toggleLoadingStatus (state) {
        if(state.loaded){
          state.loaded = false
        }
        else{
          state.loaded = true
        }
      }
    }
  })
}

export default createStore
