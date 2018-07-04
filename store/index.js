import Vuex from 'vuex'
import isBot from 'isbot';

const createStore = () => {
  return new Vuex.Store({
    state: {
      key: '',
      loaded: false,
      ssrDetector: false
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
      },
      toggleSsrDetect(state){
        state.ssrDetector = true
      }
    },
    actions: {
      async nuxtServerInit({dispatch, commit,isServer,state}, {req}) {
        if (isBot(req.headers['user-agent'])) {
          return commit('toggleSsrDetect');
        }
        return;
      }
    }
  })
}

export default createStore
