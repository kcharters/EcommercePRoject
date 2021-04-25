import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  //state contains user object which holds information about the logged-in user
  state: {
    user: {
      loggedIn: false, //if user is authenticated or not
      data: null //holds info about the loggedin user
    },
    
  },
  getters: {
    user(state){
      return state.user //returns the user object from state
    },
    
  },
  mutations: {
    //sets the loggedIn property on state.user to the valuse we passed to it
    SET_LOGGED_IN(state, value) {
      state.user.loggedIn = value;
    },
    //makes changes to the data property on state.user
    SET_USER(state, data) {
      state.user.data = data;
    }
  },
  //commit mutations
  actions: {
    fetchUser({ commit }, user) {
      commit("SET_LOGGED_IN", user !== null);
      if (user) {
        commit("SET_USER", {
          displayName: user.displayName,
          email: user.email
        });
      } else {
        commit("SET_USER", null);
      }
    }
  },
  modules:{}
});
