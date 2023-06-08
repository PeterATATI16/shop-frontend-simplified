import UtilsMixin from '../mixins/utils/utils'
import axios from "axios";

export default {
  mixins: [UtilsMixin],

  data() {
    return {
     

    };
  },

  watch: {
    selectAll: function (value) {
      if (value) {
        this.resumProducts.forEach(product => {
          this.checked.push(product.id);
        });
      } else {
        this.checked = [];
      }
    }
  },

  methods: {

    authId() {
      this.product.user_id = this.userId;
    },

    addNewProduct() {
      this.product.image = this.image;
      this.addNewElement(this.newProduct, this.product, 'produit enrégistré');
    },

    loadData() {
      let url = `http://127.0.0.1:8000/api/show-product/${this.$route.params.id}`;
      axios.get(url).then((response) => {
        this.product = response.data;
        this.product.image = response.data.image;
      });

    },

    UpdateProduct() {
      this.product.image = this.image;
      this.updateElement(this.updateProduct, this.product, 'produit modifié')
    },

    async deleteRecords() {
        const req = await axios.delete('delete-all-products/' + this.checked);
        if (req.status === 204) {
          await this.productList();
        } else {
          console.log(req.error);
        }
      
    },

    prix_total() {
      this.product.total = this.product.price * this.product.qty;
    },

    saveImage(e) {
      this.image = e.target.files[0];
  },
    
  },

  computed: {

    listOfCategories() {
      return this.getCategories;
    },
    /*____________________________________________________________________________ */

    allProducts() {
      return this.getProducts;
    },

    allResultQuery() {
      return this.searchQueryByName(this.search_by_name, this.allProducts)
    },

    allProductsFilter() {
      return this.filterByAttribute(this.allResultQuery,this.listOfCategories,'category_id',this.search)
    },

    sumTotal() {
      return this.attributeSum(this.allProductsFilter, 'total')
    },
    sumQty(){
      return this.attributeSum(this.allProductsFilter, 'qty')
    }
  },

  created() {
    return this.loadData();
  },

};