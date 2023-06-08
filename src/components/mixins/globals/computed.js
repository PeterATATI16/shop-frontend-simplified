export default {

    computed: {
        users() {
            return this.getUsers;
        },

        userId() {
            return this.StateUser.id;
        },
        userRole() {
            return this.StateUser.role;
        },
    },
}