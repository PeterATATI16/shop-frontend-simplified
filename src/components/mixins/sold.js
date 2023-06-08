import ProductMixin from '../mixins/product'

export default {

  mixins: [ProductMixin],

  data() {
    return {
      products : [],
    };
  },
  /*----------------------------------------------------------------------- */

  computed: {

    resumListOfProducts() {
      return this.allProducts;
    },

    fectchProducts() {
      return this.allProductsFilter.filter(
        (product) => product.qty > 0
      );
    },

    /*____________________________________________________________________________ */

    soldsByUser() {
      return this.getSolds.filter((sold) => sold.user_id == this.userId);
    },

    allSolds() {
      return this.getSolds;
    },

    soldsByUserFilter() {
      return this.soldsByUser.filter((sell) => {
        let product = this.allProducts.find(
          (product) => product.id == sell.product_id
        );
        return product?.name.match(this.search);
      });
    },

    allSoldsFilter() {
      return this.allSolds.filter((sell) => {
        let product = this.allProducts.find(
          (product) => product.id == sell.product_id
        );
        return product?.name.match(this.search);
      });
    },

    resumSolds() {
      if (this.userRole != 1) {
        return this.allSoldsFilter;
      } else {
        return this.soldsByUserFilter;
      }
    },

    sumTotal() {
      return this.allSoldsFilter.reduce((sum, cur) => (sum += cur.total), 0);
    },

    sumTotalByUser() {
      return this.soldsByUserFilter.reduce((sum, cur) => (sum += cur.total), 0);
    },

    resumSumTotal() {
      if (this.userRole != 1) {
        return this.sumTotal;
      } else {
        return this.sumTotalByUser;
      }
    },

    qtyTotal() {
      return this.allSoldsFilter.reduce((sum, cur) => (sum += cur.qty), 0);
    },

    qtyTotalByUser() {
      return this.soldsByUserFilter.reduce((sum, cur) => (sum += cur.qty), 0);
    },

    resumQtyTotal() {
      if (this.userRole != 1) {
        return this.qtyTotal;
      } else {
        return this.qtyTotalByUser;
      }
    },
  },

  created() {
    return this.loadData();
  },

};