import Vuex from 'vuex';
import createPersistedState from "vuex-persistedstate";


// import of modules

import auth from './modules/auth';
import category from './modules/category';
import product from './modules/product';
import sells from './modules/sells';
import spent from './modules/spent';
import withdrawal from './modules/withdrawal';


export default new Vuex.Store({
    modules : {
        auth,
        category,
        product,
        sells,
        spent,
        withdrawal
    },
    plugins: [createPersistedState()]
});