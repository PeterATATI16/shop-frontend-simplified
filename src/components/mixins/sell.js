import ProductMixin from '../mixins/product'
import axios from "axios";

export default {

  mixins: [ProductMixin],

  data() {
    return {
      sell: {
        price: "",
        qty: "",
        total: "",
        user_id: null,
        product_id: null,
      },

      products: [],
      timerTimeout: null,
    };
  },

  methods: {

    addNewSell() {
      this.addNewElement(this.newSell,this.sell, 'Vente enrégistrée');
    },

    loadData() {
      let url = `http://127.0.0.1:8000/api/show-sell/${this.$route.params.id}`;
      axios.get(url).then((response) => {
        this.sell = response.data;
      });
    },

    //selected product values
    updateValues() {
      let product = this.fectchProducts.find(p => p.id == this.sell.product_id);

      this.sell.price = product.price;
      this.sell.qty = product.qty;
      this.prix_total();
    },

    UpdateSell() {
      this.updateElement(this.updateSell, this.sell, 'vente modifiée')
    },

    // async transferData() {
    //   axios.post('move-sells')
    //     .then(response => {
    //       this.sellList();
    //     })
    //     .catch(error => {
    //       console.error(error);
    //     });
    // },

    // transferDataStart() {
    //   const delay = 30 * 24 * 60 * 60 * 1000;
    //   this.timerTimeout = setTimeout(() => {
    //       this.transferData();
    //   }, delay);

    // },

    authId() {
      this.sell.user_id = this.userId;
    },

    prix_total() {
      this.sell.total = this.sell.price * this.sell.qty;
    },

  },
  /*----------------------------------------------------------------------- */

  computed: {

    resumListOfProducts() {
      return this.elementList(this.allProducts)
    },

    fectchProducts() {
      return this.getElementsByAttributeCompare(this.allProductsFilter, 'qty', '>', 0)
    },

    /*____________________________________________________________________________ */

    sellsByUser() {
      return this.elementListByUser(this.getSells);
    },

    allSells() {
      return this.getSells;
    },

    sellsByUserFilter() {
      return this.filterByAttribute(this.sellsByUser, this.allProducts,'product_id',this.search)
    },

    allSellsFilter() {
      return this.filterByAttribute(this.allSells, this.allProducts,'product_id',this.search)
    },

    resumSells() {
      if (this.userRole != 1) {
        return this.allSellsFilter;
      } else {
        return this.sellsByUserFilter;
      }
    },

    sumTotal() {
      return this.attributeSum(this.allSellsFilter, 'total');
    },

    sumTotalByUser() {
      return this.attributeSum(this.sellsByUserFilter, 'total');
    },

    resumSumTotal() {
      if (this.userRole != 1) {
        return this.sumTotal;
      } else {
        return this.sumTotalByUser;
      }
    },

    qtyTotal() {
      return this.attributeSum(this.allSellsFilter, 'qty');
    },

    qtyTotalByUser() {
      return this.attributeSum(this.sellsByUserFilter, 'qty');
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
    // this.transferData();
    return this.loadData();
  },

};