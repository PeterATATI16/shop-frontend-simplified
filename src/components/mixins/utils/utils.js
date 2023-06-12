import HomeView from "../../views/HomeView.vue";
import FooterComponent from "../../views/adminlte/FooterComponent.vue";


/*Mixins*/
import datas from "../globals/datas";
import methods from "../globals/methods";
import computed from "../globals/computed";
import created from "../globals/created";
import mounted from "../globals/mounted";
import actions from "../globals/actions";
import getters from "../globals/getters";


export default {
    mixins: [datas,methods,computed,created,mounted,actions,getters],


    data() {
        return {
           
        };
    },

    methods: {

        
    },
    computed: {
       
    },
    mounted() {
        
    },
    components: {
        HomeView,
        FooterComponent,
    },
};
