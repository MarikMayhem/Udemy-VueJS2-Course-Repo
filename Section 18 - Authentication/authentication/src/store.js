import Vue from 'vue'
import Vuex from 'vuex'
import axios from "./axios-auth";
import globalAxios from 'axios';
import router from './router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    idToken: null,
    userId: null,
    user: null
  },
  mutations: {
    authUser(state, userData) {
      state.idToken = userData.token;
      state.userId = userData.userId;
    },
    storeUser(state, user) {
      state.user = user
    },
    clearAuthData(state) {
      state.idToken = null;
      state.userId = null;
      router.replace('/signIn')
    }
  },
  actions: {
    setLogOutTimer({ commit }, expirationTime) {
      setTimeout(() => {
        commit('clearAuthData')
      }, expirationTime * 1000)
    },
    signUp({ commit, dispatch }, authData) {
      axios
        .post("accounts:signUp?key=AIzaSyAepjCgst-dpVZU5DrCyPwsby3Rg_KNGL8", {
          email: authData.email,
          password: authData.password,
          returnSecureToken: true,
        })
        .then((res) => {
          console.log(res)
          commit('authUser', {
            token: res.data.idToken,
            userId: res.data.localId
          })
          const now = new Date()
          const expirationDate = new Date(now.getTime() + res.data.expiresIn * 1000)
          localStorage.setItem('token', res.data.idToken)
          localStorage.setItem('userId', res.data.localId)
          localStorage.setItem('expirationDate', expirationDate)
          dispatch('storeUser', authData)
          dispatch('setLogOutTimer', res.data.expiresIn)
        })
        .catch((error) => console.log(error));
    },
    logIn({ commit, dispatch }, authData) {
      axios
        .post(
          "accounts:signInWithPassword?key=AIzaSyAepjCgst-dpVZU5DrCyPwsby3Rg_KNGL8",
          {
            email: authData.email,
            password: authData.password,
            returnSecureToken: true,
          }
        )
        .then((res) => {
          console.log('sectuka', res)
          const now = new Date()
          const expirationDate = new Date(now.getTime() + res.data.expiresIn * 1000)
          localStorage.setItem('token', res.data.idToken)
          localStorage.setItem('userId', res.data.localId)
          localStorage.setItem('expirationDate', expirationDate)
          commit('authUser', {
            token: res.data.idToken,
            userId: res.data.localId
          })
          router.replace('/dashboard')
          dispatch('setLogOutTimer', res.data.expiresIn)
        })
        .catch((error) => console.log(error));

    },
    tryAutoLogin({ commit }) {
      const token = localStorage.getItem('token')
      const expirationDate = localStorage.getItem('expirationDate')
      const now = new Date()


      if (!token) {
        return
      }
      const userId = localStorage.getItem('userId')

      if (now >= expirationDate) {
        return
      }
      commit('authUser', { token, userId })

    },
    logout({ commit }) {
      commit('clearAuthData')
      localStorage.removeItem('expirationDate')
      localStorage.removeItem('token')
      localStorage.removeItem('userId')
    },
    storeUser({ commit, state }, userData) {
      if (!state.idToken) {
        return
      }
      globalAxios.post('/users.json' + '?auth=' + state.idToken, userData)
        .then(res => console.log(res))
        .catch(error => console.log(error))
    },
    fetchUser({ commit, state }) {
      console.log('tuka', state.idToken)
      if (!state.idToken) {
        return
      }
      globalAxios.get(`/users.json?auth=${state.idToken}`)
        .then(res => {
          console.log(res)
          const data = res.data
          const users = []
          for (let key in data) {
            const user = data[key]
            user.id = key
            users.push(user)
          }
          console.log(users)
          commit('storeUser', users[0])
        })
        .catch(error => console.log(error))
    }
  },
  getters: {
    user(state) {
      return state.user
    },
    isAuth(state) {
      return state.idToken !== null
    }
  },

})