import axios from "axios";

/*------------------------------------ */
const state = () => ({

    spents: []

});
/*------------------------------------ */
const getters = {

    getSpents: state => state.spents

};
/*------------------------------------ */
const actions = {

    async spentList({ commit }) {

        try {
            const response = await axios.get('spents');
            commit('set_spent', response.data);


        } catch (error) {
            console.log(error);
        }

    },
    /*_____________________________________________________ */
    async newSpent({ commit }, newspent) {

        try {
            const response = await axios.post('new-spent',
                newspent);

            commit('new_spent', response.data);

        } catch (error) {
            console.log(error);
        }

    },
    /*_____________________________________________________ */
    async updateSpent({ commit }, spentupdated) {
        try {
            const response = await axios.post(`update-spent/${spentupdated.id}`,
                spentupdated);
            commit('update_spent', response.data);
        } catch (error) {
            console.log(error);
        }


    },
    /*_____________________________________________________ */
    async deleteSpent({ commit }, id) {

        try {
            await axios.delete(`delete-spent/${id}`);
            commit('delete_spent', id);

        } catch (error) {
            console.log(error);

        }

    }

};
/*------------------------------------ */
const mutations = {

    set_spent: (state, spent) => {
        state.spents = spent;
    },

    new_spent: (state, nwspent) => {
        state.spents.unshift(nwspent)
    },

    update_spent: (state, updatedSpent) => {
        const index = state.spents.findIndex(mdle => mdle.id === updatedSpent.id)

        if (index !== -1) {
            state.spents.splice(index, 1, updatedSpent);
        }
    },

    delete_spent: (state, id) => {
        state.spents = state.spents.filter(mdle => mdle.id !== id)
    }
};
/*------------------------------------ */
export default {
    state,
    getters,
    actions,
    mutations
}