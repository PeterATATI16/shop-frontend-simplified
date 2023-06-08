<template>
  <div class="modele">
    
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  methods: {
    ...mapActions(["modeleList", "deleteModele"]),
  },
  /*----------------------------------------------------------------------- */

  computed: {
    ...mapGetters(["getModeles", "StateUser"]),

    // get list of modele
    listOfModeles() {
      return this.getModeles.filter((modele) => modele.user_id == this.userId);
    },
    
    // get user id
    userId() {
      return this.StateUser.id;
    },
  },
  /*----------------------------------------------------------------------- */
  mounted() {
    this.modeleList();
  },
};
</script>

<style>
</style>