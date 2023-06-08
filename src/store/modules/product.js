import axios from "axios";
import { fetchData, createData, updateData, deleteData } from "../../components/utils/util";
import { DELETE_DATA,UPDATE_DATA } from "../../components/utils/mutations";
/*---------------GETTERS--------------------- */

//Méthode initiale de produit
const state = () => ({

    products: [],

});
/*------------------------------------ */
const getters = {

    getProducts: state => state.products

};
/*------------------------------------ */
const actions = {

    async productList({ commit }) {

        try {
            const response = await axios.get('products');
            commit('set_products', response.data);
        } catch (error) {
            console.log(error);
        }

    },
    /*_____________________________________________________ */
    async newProduct({ commit }, newproduct) {

        try {

            await createData("new-product", commit,'NEW_PRODUCT');
        } catch (error) {
            console.log(error);
        }

    },

    async updateProduct({ commit }, productupdated) {
        try {
            await updateData("update-product", productupdated.id, productupdated, commit,'UPDATE_PRODUCT')
        } catch (error) {
            console.log(error);
        }
    },

    async deleteProduct({ commit }, id) {
        await deleteData("delete-product", id, commit,'DELETE_PRODUCT');
      },

};

const mutations = {

    set_products: (state, product) => {
        state.products = product;
    },

    new_product: (state, nwproduct) => {
        state.products.unshift(nwproduct)
    },

    uUPDATE_PRODUCT: (state, updated) => {
        UPDATE_DATA(state, 'product', 'products', updated)
    },

    DELETE_PRODUCT: (state, id) => {
        DELETE_DATA(state,id,'products');
    }

    
};
/*------------------------------------ */
export default {
    state,
    getters,
    actions,
    mutations
}