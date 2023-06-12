import { useToastr } from "../utils/toastr";
const toastr = useToastr();

export default {
  methods: {

    authId() {
      this.product.user_id = this.userId;
    },

    saveImage(e) {
      this.image = e.target.files[0];
    },

    formatPrice(value) {
      let val = (value / 1).toFixed(0).replace('.', ',')
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    },

    /*________________________________FUNCTIONS_____________________________________ */
    async addNewElement(action, model, message) {
      try {
        await action(model);
        toastr.success(`${message}`);
      } catch (error) {
        console.log(error);
      }
    },

    async updateElement(action, model, message) {
      try {
        await action(model);
        toastr.success(`${message}`);
      } catch (error) {
        console.log(error);
      }
    },

    elementList(action) {
      return action.sort((a, b) => a.name.localeCompare(b.name));
    },

    getElementsByAttributeCompare(action, attribute, operator, value) {
      return action.filter(
        (modele) => {
          switch (operator) {
            case '>':
              return modele[attribute] > value;
            case '<':
              return modele[attribute] < value;
            case '=':
              return modele[attribute] == value;
            default:
              return false;
          }
        });
    },

    elementListByUser(action) {
      return action.filter(
        (model) => model.user_id == this.userId
      );
    },

    searchQueryByName(q, action) {
      if (q) {
        return action.filter((model) => {
          return q
            .toLowerCase()
            .split(" ")
            .every((v) => model.name.toLowerCase().includes(v));
        });
      } else {
        return action;
      }
    },

    filterByAttribute(method, externFetchDataMethod, foreignKey, query) {
      return method.filter((model) => {
        let gotModel = externFetchDataMethod.find(
          (gotModel) => gotModel.id == model[foreignKey]
        );
        return gotModel?.name.match(query);
      });
    },

    attributeSum(action, attribute) {
      return action.reduce((sum, cur) => (sum += cur[attribute]), 0);
    }

  }
}