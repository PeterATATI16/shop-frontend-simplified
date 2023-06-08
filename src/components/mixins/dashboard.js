import ProductMixin from "./product";
import SellMixin from "./sell";
import SpentMixin from "./spent";
import WithdrawalMixin from "./withdrawal";


export default {
  mixins: [ProductMixin, SellMixin, WithdrawalMixin, SpentMixin],
  data() {
    return {};
  },

  methods: {},
  /*----------------------------------------------------------------------- */

  computed: {
    usersFilteredByRole() {
      return this.users.filter((user) => user.role != 0);
    },

    /*____________________________________________________________________________ */

    sumTotal() {
      return this.allProductsFilter.reduce((sum, cur) => (sum += cur.total), 0);
    },

    // sumTotalByUser() {
    //   return this.productsByUserFilter.reduce(
    //     (sum, cur) => (sum += cur.total),
    //     0
    //   );
    // },

    resumTotal() {
      if (this.userRole != 1) {
        return this.sumTotal;
      } else {
        return this.sumTotalByUser;
      }
    },

    /*___________________________________________________________________________ */

    sumTotal_sell() {
      return this.allSellsFilter.reduce((sum, cur) => (sum += cur.total), 0);
    },

    sumTotalByUser_sell() {
      return this.sellsByUserFilter.reduce((sum, cur) => (sum += cur.total), 0);
    },

    resumSumTotal_sell() {
      if (this.userRole != 1) {
        return this.sumTotal_sell;
      } else {
        return this.sumTotalByUser_sell;
      }
    },

    reste() {
      return this.resumTotal - this.resumSumTotal_sell;
    },

    rendement() {
      return ((this.resumSumTotal_sell / this.resumTotal) * 100).toFixed(2);
    },

    /*______________________________________________________________________ */

    lastSells() {
      return this.resumSells.slice(this.resumSells.length - 3);
    },

    lastSumTotal() {
      return this.lastSells.reduce((sum, cur) => (sum += cur.total), 0);
    },

    lastQtySell() {
      return this.lastSells.reduce((sum, cur) => (sum += cur.qty), 0);
    },
    /*________________________________________________________________________ */

    lastWithdrawals() {
      return this.resumWithdrawals.slice(this.resumWithdrawals.length - 3);
    },

    lastWithdrawalsTotal() {
      return this.lastWithdrawals.reduce((sum, cur) => (sum += cur.amount), 0);
    },
    /*________________________________________________________________________ */

    lastSpents() {
      return this.resumSpents.slice(this.resumSpents.length - 3);
    },

    lastSpentsTotal() {
      return this.lastSpents.reduce((sum, cur) => (sum += cur.amount), 0);
    },
    /*________________________________________________________________________ */
  },
};