import { mapActions } from "vuex";

export default {
    methods: {
        ...mapActions([
            "newCategory",
            "updateCategory",
            "categoryList",
            "deleteCategory",

            /*____________________ */
            "updateSell",
            "newSell",
            "sellList",
            "soldList",
            "deleteSell",
            /*______________________ */
            "updateProduct",
            "newProduct",
            "productList",
            "deleteProduct",
            /*_______________________ */
            "userList",
            "register",
            /*________________________ */
            "newSpent",
            "updateSpent",
            "spentList",
            "deleteSpent",
            /*________________________ */
            "withdrawalList",
            "deleteWithdrawal",
            "updateWithdrawal",
            "newWithdrawal",            
        ]),

    }

}