import ProductMixin from '../mixins/product'
import SellMixin from '../mixins/sell'

import axios from "axios";

export default {
  mixins: [ProductMixin,SellMixin],
  data() {
    return {
      withdrawal: {
        amount: "",
        manager_id: "",
        date: "",
      },
      am : null,

    };
  },

  methods: {

    authId() {
      if(this.userRole != 0)
      this.withdrawal.manager_id = this.userId;
    },

    wAmount(){
      this.am = this.withdrawal.amount;
    },

    async addNewWithdrawal() {
      this.addNewElement(this.newWithdrawal, this.withdrawal, 'dépense enregistrée')
    },

    loadData() {
      let url = `http://127.0.0.1:8000/api/show-withdrawal/${this.$route.params.id}`;
      axios.get(url).then((response) => {
        this.withdrawal = response.data;
      });
    },

    async UpdateWithdrawal() {
      this.updateElement(this.updateWithdrawal, this.withdrawal, 'retrait modifié')
    },
  },

  computed: {

    withdrawals() {
      return this.getWithdrawals;
    },

    withdrawalsByUser() {
      return this.getWithdrawals.filter((withdrawal) => withdrawal.manager_id == this.userId);
    },

    withdrawalsByUserFilter() {
      return this.withdrawalsByUser.filter((withdrawal) => {
        let user = this.users.find(
          (user) => user.id == withdrawal.manager_id
        );
        return user?.name.match(this.search);
      });
    },

    allWithdrawalsFilter() {
      return this.withdrawals.filter((withdrawal) => {
        let user = this.users.find(
          (user) => user.id == withdrawal.manager_id
        );
        return user?.name.match(this.search);
      });
    },

    resumWithdrawals() {
      if (this.userRole != 1) {
        return this.allWithdrawalsFilter;
      } else {
        return this.withdrawalsByUserFilter;
      }
    },

    withdrawalTotal() {
      return this.allWithdrawalsFilter.reduce((sum, cur) => (sum += cur.amount), 0);
    },

    withdrawalTotalByUser() {
      return this.withdrawalsByUserFilter.reduce(
        (sum, cur) => (sum += cur.amount),
        0
      );
    },

    withdrawalTotalResum(){
      if(this.userRole != 1){
        return this.withdrawalTotal;
      }else{
        return this.withdrawalTotalByUser;
      }
    },

    resumRest(){
      return this.resumSumTotal_sell - this.withdrawalTotalResum;
    },
  },
};