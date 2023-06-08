import axios from 'axios';
axios.defaults.withCredentials = true;


const state = {
  user: null,
  users: [],
  allusers: [],
  loginError: null,
};


const getters = {
  isAuthenticated: (state) => !!state.user,
  StateUser: (state) => state.user,
  getUsers: state => state.allusers,
  getLoginError: state => state.loginError
};


const actions = {
  /*--------------------------------------------------------------------------------------- */
  async register({ commit }, newUser) {

    try {
      const response = await axios.post('register',
        newUser);
      commit('register', response.data);
    } catch (error) {
      console.log(error);
    }

  },
  /*--------------------------------------------------------------------------------------- */
  async LogIn({ commit }, userAuth) {
      await axios.post("login", userAuth)
        .then(response => {
          commit("setUser", response.data);
        })
        .catch(error => {
          commit('LOGIN_FAILURE', error.response.data.message);
        });
  },
  /*--------------------------------------------------------------------------------------- */
  async userList({ commit }) {

    try {
      const response = await axios.get('users');
      commit('set_users', response.data);
    } catch (error) {
      console.log(error);
    }

  },
  /*--------------------------------------------------------------------------------------- */
  async LogOut({ commit }) {
    let user = null;
    commit("logout", user);
  },

  async deleteManager({ commit }, id) {
    try {
      await axios.delete(`delete-manager/${id}`);
      commit('delete_manager', id);
    } catch (error) {
      console.log(error);
    }
  }
  /*--------------------------------------------------------------------------------------- */

};


const mutations = {

  register: (state, newUser) => {
    state.users.unshift(newUser)
  },

  setUser(state, userAuth) {
    state.user = userAuth;
  },

  set_users(state, getu) {
    state.allusers = getu;
  },

  logout(state, user) {
    state.user = user;
    console.log('Utilisateur déconnecté');
  },

  delete_manager: (state, id) => {
    state.user = state.user.filter(mdle => mdle.id !== id)
  },

  LOGIN_FAILURE(state, errorMessage) {
    state.loginError = errorMessage;
  },
  

};

export default {
  state,
  getters,
  actions,
  mutations
};