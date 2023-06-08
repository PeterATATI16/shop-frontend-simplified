<template>
  <div class="new-modele">
    
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      id: null,
      modele: {
        name: "",

        //
        user_id: null,
      },
    };
  },

  /*---------------------------------------------------- */
  methods: {
    authId() {
      this.modele.user_id = this.userId;
    },

    ...mapActions(["newModele"]),

    async addNewModele() {
      try {
        await this.newModele(this.modele);

        this.modele.user_id = this.user.id;
        this.authId();

      } catch (error) {
        console.log(error);
      }

    },
  },
  /*---------------------------------------------------- */
  computed: {
    ...mapGetters({ user: "StateUser" }),

    userId() {
      return this.user.id;
    },
  },
};
</script>

<style>
</style>