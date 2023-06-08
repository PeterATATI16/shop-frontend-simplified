export default {
  data() {
    return {
      imgUrl: "http://127.0.0.1:8000",
      search: "",
      search_by_name: "",
      image: null,
      checked: [],
      selectAll: false,


      /*_______________________________________ */
      category: {
        name: "",
      },
      
      sell: {
        price: "",
        qty: "",
        total: "",
        user_id: null,
        product_id: null,
      },

      user: {
        name: "",
        phone: "",
        email: "",
        role: "",
        password: "",
        confirm_password: "",
      },

      product: {
        name: "",
        price: "",
        qty: "",
        total: "",
        user_id: null,
        category_id: null,
        image:null
      },

      products: [],
      timerTimeout: null,
    }
  }
}
