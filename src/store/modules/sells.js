import axios from "axios";

/*------------------------------------ */
const state = () => ({

    sells: [],
    solds: []

});
/*------------------------------------ */
const getters = {

    getSells: state => state.sells,
    getSolds: state => state.solds

};
/*------------------------------------ */
const actions = {

    async sellList({ commit }) {

        try {
            const response = await axios.get('sells');
            commit('set_sells', response.data);
        } catch (error) {
            console.log(error);
        }

    },

    async soldList({ commit }) {

        try {
            const response = await axios.get('solds');
            commit('set_solds', response.data);
        } catch (error) {
            console.log(error);
        }

    },
    /*_____________________________________________________ */
    async newSell({ commit }, newsell) {

        try {

            const response = await axios.post('new-sell',
                newsell);

            commit('new_sell', response.data);

        } catch (error) {
            console.log(error);
        }

    },
    /*_____________________________________________________ */
    async updateSell({ commit }, sellupdated) {
        try {

            const response = await axios.post(`update-sell/${sellupdated.id}`,
                sellupdated);
            commit('update_sell', response.data);

        } catch (error) {
            console.log(error);
        }


    },
    /*_____________________________________________________ */
    async deleteSell({ commit }, id) {

        try {
            await axios.delete(`delete-sell/${id}`);
            commit('delete_sell', id);

        } catch (error) {
            console.log(error);

        }

    },

    /*_____________________________________________________ */
    async deleteAllSells({ commit }) {

        try {
            await axios.delete("delete-all");
            commit('delete_all');

        } catch (error) {
            console.log(error);

        }

    },

};
/*------------------------------------ */
const mutations = {

    set_sells: (state, sell) => {
        state.sells = sell;
    },

    set_solds: (state, sold) => {
        state.solds = sold;
    },

    new_sell: (state, nwsell) => {
        state.sells.unshift(nwsell)
    },

    update_sell: (state, updatedSell) => {
        const index = state.sell.findIndex(mdle => mdle.id === updatedSell.id)

        if (index !== -1) {
            state.sells.splice(index, 1, updatedSell);
        }
    },

    delete_sell: (state, id) => {
        state.sells = state.sells.filter(mdle => mdle.id !== id)
    },

    delete_all: (state) => {
        state.sells = null
    },
};
/*------------------------------------ */
export default {
    state,
    getters,
    actions,
    mutations
}