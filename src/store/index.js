import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    profileCreated: false,
    userProfile: {}
  },
  mutations: {
    createProfile: (state, boolean) => {
      state.profileCreated = boolean;
    },
    submitProfile: (state, profile) => {
      console.log("success")
      console.log(profile)
      state.userProfile = profile;
    },
    createAge: (state, age) => {
      state.userProfile.age = age;
    }
  },
  getters: {
    createProfile: (state) => {
      return state.profileCreated;
    },
    submitProfile: (state) => {
      return state.userProfile;
    },
    createAge: (state) => {
      return state.userProfile.age;
    }
  },
  actions: {
  },
  modules: {
  }
})
