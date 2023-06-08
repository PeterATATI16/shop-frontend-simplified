<template>
  <div class="update-modele">
  
  </div>
</template>

<script>
import axios from "axios";
import { mapActions } from "vuex";
export default {
  data() {
    return {
      modele: {
        name: "",
      },
    };
  },
  /*----------------------------------------------------------- */
  methods: {
    loadData() {
      let url = `http://127.0.0.1:8000/api/show-modele/${this.$route.params.id}`;
      axios.get(url).then((response) => {
        this.modele = response.data;
      });
    },

    goToIndex() {
      this.$router.push("");
    },

    ...mapActions(["updateModele"]),

    async updateThisModele() {
      await this.updateModele(this.modele);
    },
  },
  /*----------------------------------------------------------- */
  created() {
    this.loadData();
  },
};
</script>

<style>
</style>