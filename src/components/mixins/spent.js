import ProductMixin from '../mixins/product'
import SellMixin from '../mixins/sell'
import axios from "axios";

export default {
  mixins: [SellMixin,ProductMixin],
  data() {
    return {
      spent: {
        amount: "",
        spent_reason: "",
        manager_id: "",
        date: "",
      },

    };
  },

  methods: {

    authId() {
      if(this.userRole != 0)
      this.spent.manager_id = this.userId;
    },

    addNewSpent() {
      this.addNewElement(this.newSpent, this.spent, 'dépense enregistrée')
    },

    loadData() {
      let url = `http://127.0.0.1:8000/api/show-spent/${this.$route.params.id}`;
      axios.get(url).then((response) => {
        this.spent = response.data;
      });
    },

    UpdateSpent() {
      this.updateElement(this.updateSpent, this.spent, 'dépense modifiée')
    },
  },

  computed: {

    spents() {
      return this.getSpents;
    },

    spentsByUser() {
      return this.getSpents.filter((spent) => spent.manager_id == this.userId);
    },

    spentsByUserFilter() {
      return this.spentsByUser.filter((spent) => {
        let user = this.users.find(
          (user) => user.id == spent.manager_id
        );
        return user?.name.match(this.search);
      });
    },

    allSpentsFilter() {
      return this.spents.filter((spent) => {
        let user = this.users.find(
          (user) => user.id == spent.manager_id
        );
        return user?.name.match(this.search);
      });
    },

    resumSpents() {
      if (this.userRole != 1) {
        return this.allSpentsFilter;
      } else {
        return this.spentsByUserFilter;
      }
    },

    spentTotal() {
      return this.allSpentsFilter.reduce((sum, cur) => (sum += cur.amount), 0);
    },

    spentTotalByUser() {
      return this.spentsByUserFilter.reduce(
        (sum, cur) => (sum += cur.amount),
        0
      );
    },

    resumSpentTotal(){
      if(this.userRole != 1){
        return this.spentTotal;
      }else{
        return this.spentTotalByUser;
      }
    },
  },
};