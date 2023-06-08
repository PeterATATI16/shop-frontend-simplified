import { mapGetters } from "vuex";

export default {
    computed: {
        ...mapGetters([
            "getProducts",

            "getCategories",

            "StateUser",
            "getUsers",

            "getSells",
            "getSolds",

            "getSpents",

            "getWithdrawals",

            "getUsers",

            "getLoginError"

        ]),
    },

}