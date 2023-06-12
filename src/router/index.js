import { createRouter, createWebHistory } from "vue-router";
import store from "../store";

// Import of components

import HomeView from '@/components/views/HomeView.vue'

/*----------------------------------------------------------------------------- */

import DashboardView from '@/components/views/model-components/DashboardView.vue'

/*----------------------------------------------------------------------------- */

import CategoriesIndex from '@/components/views/model-components/categories/CategoriesIndex.vue'
import NewCategory from '@/components/views/model-components/categories/NewCategory.vue'
import UpdateCategory from '@/components/views/model-components/categories/UpdateCategory.vue'
/*----------------------------------------------------------------------------- */

import ProductsIndex from '@/components/views/model-components/products/ProductsIndex.vue'
import NewProduct from '@/components/views/model-components/products/NewProduct.vue'
import UpdateProduct from '@/components/views/model-components/products/UpdateProduct.vue'
import GalleryIndex from '@/components/views/model-components/gallery/GalleryIndex.vue'
/*----------------------------------------------------------------------------- */

import SellsIndex from '@/components/views/model-components/sells/SellsIndex.vue'
import SoldsIndex from '@/components/views/model-components/sells/SoldsIndex.vue'
import NewSell from '@/components/views/model-components/sells/NewSell.vue'
import UpdateSell from '@/components/views/model-components/sells/UpdateSell.vue'
import MonthlySalesChart from '@/components/views/model-components/sells/MonthlySalesChart.vue'
/*----------------------------------------------------------------------------- */

import SpentsIndex from '@/components/views/model-components/spents/SpentsIndex.vue'
import NewSpent from '@/components/views/model-components/spents/NewSpent.vue'
import UpdateSpent from '@/components/views/model-components/spents/UpdateSpent.vue'
/*----------------------------------------------------------------------------- */

import WithdrawalsIndex from '@/components/views/model-components/withdrawals/WithdrawalsIndex.vue'
import NewWithdrawal from '@/components/views/model-components/withdrawals/NewWithdrawal.vue'
import UpdateWithdrawal from '@/components/views/model-components/withdrawals/UpdateWithdrawal.vue'
/*----------------------------------------------------------------------------- */


// Auth
import LoginComponent from '@/components/auth/LoginComponent.vue'


import RegisterComponent from '@/components/auth/RegisterComponent.vue'
import NewUser from '@/components/auth/NewUser.vue'
import UpdateUser from '@/components/auth/UpdateUser.vue'

// Routes

const routes = [
    /*----------------------------------------------------------------------------- */


    {
        name: 'HomeView',
        path: '/home',
        component: HomeView,
        meta: {
            title: '',
            requiresAuth: true

        }
    },
    /*----------------------------------------------------------------------------- */


    {
        name: 'DashboardView',
        path: '/',
        component: DashboardView,
        meta: {
            title: 'dashboard',
            requiresAuth: true

        }
    },

    /*----------------------------------------------------------------------------- */


    {
        name: 'CategoriesIndex',
        path: '/categories',
        component: CategoriesIndex,
        meta: {
            title: 'categories',
            requiresAuth: true

        }
    },

    {
        name: 'NewCategory',
        path: '/new-category',
        component: NewCategory,
        meta: {
            title: "add a new category",
            requiresAuth: true
        }
    },

    {
        name: 'UpdateCategory',
        path: '/edit-category/edit/:id?',
        component: UpdateCategory,
        meta: {
            title: "update category",
            requiresAuth: true
        }
    },

    /*----------------------------------------------------------------------------- */

    {
        name: 'ProductsIndex',
        path: '/products',
        component: ProductsIndex,
        meta: {
            title: 'products',
            requiresAuth: true

        }
    },

    {
        name: 'NewProduct',
        path: '/new-product',
        component: NewProduct,
        meta: {
            title: "add a new product",
            requiresAuth: true
        }
    },

    {
        name: 'UpdateProduct',
        path: '/edit-product/edit/:id?',
        component: UpdateProduct,
        meta: {
            title: "update product",
            requiresAuth: true
        }
    },

    {
        name: 'GalleryIndex',
        path: '/gallery',
        component: GalleryIndex,
        meta: {
            title: "products gallery",
            requiresAuth: true
        }
    },
    /*----------------------------------------------------------------------------- */

    {
        name: 'SellsIndex',
        path: '/sells',
        component: SellsIndex,
        meta: {
            title: 'sells',
            requiresAuth: true

        }
    },

    {
        name: 'SoldsIndex',
        path: '/solds',
        component: SoldsIndex,
        meta: {
            title: 'solds',
            requiresAuth: true

        }
    },

    {
        name: 'MonthlySalesChart',
        path: '/sales-stats',
        component: MonthlySalesChart,
        meta: {
            title: 'sold stats',
            requiresAuth: true

        }
    },

    {
        name: 'NewSell',
        path: '/new-sell',
        component: NewSell,
        meta: {
            title: "add a new sell",
            requiresAuth: true
        }
    },

    {
        name: 'UpdateSell',
        path: '/edit-sell/edit/:id?',
        component: UpdateSell,
        meta: {
            title: "update sell",
            requiresAuth: true
        }
    },

    /*----------------------------------------------------------------------------- */

    {
        name: 'WithdrawalsIndex',
        path: '/withdrawals',
        component: WithdrawalsIndex,
        meta: {
            title: 'withdrawals',
            requiresAuth: true

        }
    },

    {
        name: 'NewWithdrawal',
        path: '/new-withdrawal',
        component: NewWithdrawal,
        meta: {
            title: "add a new withdrawal",
            requiresAuth: true
        }
    },

    {
        name: 'UpdateWithdrawal',
        path: '/edit-withdrawal/edit/:id?',
        component: UpdateWithdrawal,
        meta: {
            title: "update withdrawal",
            requiresAuth: true
        }
    },

    /*----------------------------------------------------------------------------- */

    {
        name: 'SpentsIndex',
        path: '/spents',
        component: SpentsIndex,
        meta: {
            title: 'spents',
            requiresAuth: true

        }
    },

    {
        name: 'NewSpent',
        path: '/new-spent',
        component: NewSpent,
        meta: {
            title: "add a new spent",
            requiresAuth: true
        }
    },

    {
        name: 'UpdateSpent',
        path: '/edit-spent/edit/:id?',
        component: UpdateSpent,
        meta: {
            title: "update spent",
            requiresAuth: true
        }
    },

    /*----------------------------------------------------------------------------- */




    // Auth
    {
        name: 'LoginComponent',
        path: '/login',
        component: LoginComponent,
        meta: {
            title: 'login'
        }
    },

    {
        name: 'RegisterComponent',
        path: '/register',
        component: RegisterComponent,
        meta: {
            title: 'register'
        }
    },

    {
        name: 'NewUser',
        path: '/new-user',
        component: NewUser,
        meta: {
            title: "add a new user",
        }
    },

    {
        name: 'UpdateUser',
        path: '/edit-user/edit/:id?',
        component: UpdateUser,
        meta: {
            title: "update user",
            requiresAuth: true
        }
    },
];

const router = createRouter(
    {
        history: createWebHistory(),
        routes,
    }
)


// routes protection (middleware)

router.beforeEach((to, from, next) => {
    if (to.matched.some((record) => record.meta.requiresAuth)) {
        if (store.getters.isAuthenticated) {
            next();
            return;
        }
        next("/login");
    } else {
        next();
    }
});

router.beforeEach((to, from, next) => {
    if (to.matched.some((record) => record.meta.guest)) {
        if (store.getters.isAuthenticated) {
            next("/");
            return;
        }
        next();
    } else {
        next();
    }
});

router.afterEach((to, from) => {
    console.log(from);
    document.title = to.meta.title;
});

export default router;