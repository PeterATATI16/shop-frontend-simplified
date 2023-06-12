import UtilsMixin from '../mixins/utils/utils'

import axios from "axios";

export default {

  mixins: [UtilsMixin],

  data() {
    return {
      
    };
  },

  methods: {

    addCat(){
        this.addNewElement(this.newCategory, this.category, 'Catégorie bien enrégistré');
    },

    loadData() {
      let url = `http://127.0.0.1:8000/api/show-category/${this.$route.params.id}`;
      axios.get(url).then((response) => {
        this.category = response.data;
      });
    },

    async updCategory() {
      this.updateElement(this.updateCategory, this.category, 'catégorie modifié')
    },

  },

  computed: {
    categories() {
      return this.getCategories.sort((a, b) => a.name.localeCompare(b.name));
    },

  },

  created() {
    return this.loadData();
  },

};