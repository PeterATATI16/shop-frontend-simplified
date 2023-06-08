import axios from "axios";

/*------------------------------------ */
const state = () => ({

    withdrawals: []

});
/*------------------------------------ */
const getters = {

    getWithdrawals: state => state.withdrawals

};
/*------------------------------------ */
const actions = {

    async withdrawalList({ commit }) {

        try {
            const response = await axios.get('withdrawals');
            commit('set_withdrawal', response.data);

        } catch (error) {
            console.log(error);
        }

    },
    /*_____________________________________________________ */
    async newWithdrawal({ commit }, newwithdrawal) {

        try {
            const response = await axios.post('new-withdrawal',
                newwithdrawal);

            commit('new_withdrawal', response.data);

        } catch (error) {
            console.log(error);
        }

    },
    /*_____________________________________________________ */
    async updateWithdrawal({ commit }, withdrawalupdated) {
        try {
            const response = await axios.post(`update-withdrawal/${withdrawalupdated.id}`,
                withdrawalupdated);
            commit('update_withdrawal', response.data);

        } catch (error) {
            console.log(error);
        }


    },
    /*_____________________________________________________ */
    async deleteWithdrawal({ commit }, id) {

        try {
            await axios.delete(`delete-withdrawal/${id}`);
            commit('delete_withdrawal', id);

        } catch (error) {
            console.log(error);

        }

    }

};
/*------------------------------------ */
const mutations = {

    set_withdrawal: (state, withdrawal) => {
        state.withdrawals = withdrawal;
    },

    new_withdrawal: (state, nwwithdrawal) => {
        state.withdrawals.unshift(nwwithdrawal)
    },

    update_withdrawal: (state, updatedWithdrawal) => {
        const index = state.withdrawals.findIndex(mdle => mdle.id === updatedWithdrawal.id)

        if (index !== -1) {
            state.withdrawals.splice(index, 1, updatedWithdrawal);
        }
    },

    delete_withdrawal: (state, id) => {
        state.withdrawals = state.withdrawals.filter(mdle => mdle.id !== id)
    }
};
/*------------------------------------ */
export default {
    state,
    getters,
    actions,
    mutations
}