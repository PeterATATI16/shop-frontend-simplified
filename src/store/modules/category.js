import axios from "axios";
import { fetchData, createData, updateData, deleteData } from "../../components/utils/util";

/*------------------------------------ */
const state = () => ({

    category: []

});
/*------------------------------------ */
const getters = {

    getCategories: state => state.category

};
/*------------------------------------ */
const actions = {

    async categoryList({ commit }) {

        try {
            const response = await axios.get('categories');
            commit('set_category', response.data);
        } catch (error) {
            console.log(error);
        }

    },

    async categoryList1({ commit }) {
        try {
          const cats = await fetchData("categories");
          commit("set_category", cats);
        } catch (error) {
          // Gérer les erreurs
        }
      },
    /*_____________________________________________________ */
    async newCategory({ commit }, newcategory) {

        try {
            const response = await axios.post('new-category',
                newcategory);

            commit('new_category', response.data);
        } catch (error) {
            console.log(error);
        }

    },
    /*_____________________________________________________ */
    async updateCategory({ commit }, categoryupdated) {
        try {
            const response = await axios.post(`update-category/${categoryupdated.id}`,
                categoryupdated);
            commit('update_category', response.data);
        } catch (error) {
            console.log(error);
        }
    },
    /*_____________________________________________________ */
    async deleteCategory({ commit }, id) {
        try {
            await axios.delete(`delete-category/${id}`);
            commit('delete_category', id);
        } catch (error) {
            console.log(error);
        }
    }
};
/*------------------------------------ */
const mutations = {

    set_category: (state, category) => {
        state.category = category;
    },

    new_category: (state, nwcategory) => {
        state.category.unshift(nwcategory)
    },

    update_category: (state, updatedCategory) => {
        const index = state.category.findIndex(mdle => mdle.id === updatedCategory.id)

        if (index !== -1) {
            state.category.splice(index, 1, updatedCategory);
        }
    },

    delete_category: (state, id) => {
        state.category = state.category.filter(mdle => mdle.id !== id)
    }
};
/*------------------------------------ */
export default {
    state,
    getters,
    actions,
    mutations
}