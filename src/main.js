/*
NOM 
PRENOM
ENTREPRISE
TECHNOLOGIES
*/


import { createApp } from 'vue'
import App from './App.vue'

// Element plus 
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import VueToast from '@coreui/vue';
import Toaster from '@meforma/vue-toaster';

// import '@coreui/coreui/dist/css/coreui.min.css'

import axios from 'axios';
// import chartjs from 'chart.js';

// import moment from "vue-moment";

import store from './store';
import router from './router';

axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://127.0.0.1:8000/api/';

createApp(App).use(router).use(store).use(ElementPlus).use(VueToast).use(Toaster).mount('#app')
