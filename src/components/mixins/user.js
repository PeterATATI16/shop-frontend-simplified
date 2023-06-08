import UtilsMixin from '../mixins/utils/utils'


export default {

    mixins: [UtilsMixin],
    
    data() {
      return {
       
      };
    },
  
    methods: {
      async registerUser() {
        this.addNewElement(this.register, this.user, 'utilisateur enregistré')
      },
    },
  
    computed: {
      users() {
        return this.getUsers.filter(
          (user) => user.role == 1
        );
    },
    },
  };