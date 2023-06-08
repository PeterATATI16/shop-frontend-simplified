<template>
  <aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Sidebar -->
    <div class="sidebar">
      <!-- Sidebar user panel (optional) -->
      <div class="user-panel mt-3 pb-3 mb-3 d-flex">
        <div class="image">
          <img
            src="dist/img/user2-160x160.jpg"
            class="img-circle elevation-2"
            alt=""
          />
        </div>
        <div class="info">
          <div href="#" class="d-block" v-if="StateUser">
            <p class="text mx-auto">
              {{ StateUser.name }}
              <span v-if="StateUser.role == 0" class="badge badge-success"
                >super user</span
              >

              <span v-if="StateUser.role != 0" class="badge badge-primary"
                >admin</span
              >
            </p>
            <div class="">
              <ul>
                <a v-if="isLoggedIn">
                  <button @click="logout" class="btn btn-danger">
                    <i class="icon-key"></i><span>Se déconnecter</span>
                  </button>
                </a>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- Sidebar Menu -->
      <nav class="mt-2">
        <ul
          class="nav nav-pills nav-sidebar flex-column"
          data-widget="treeview"
          role="menu"
          data-accordion="false"
        >
          <!-- Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library -->

          <li class="nav-item">
            <router-link to="/" class="nav-link bg-secondary">
              <i class="nav-icon fas fa-tachometer-alt"></i>
              Dashboard
            </router-link>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-copy"></i>
              <p>
                Boutique
                <i class="fas fa-angle-left right"></i>
                <span class="badge badge-info right">tables</span>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <router-link to="/categories" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  Categories
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/products" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  Products
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/sells" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  Sells
                </router-link>
              </li>
            </ul>
          </li>

          <li class="nav-header">AUTRES</li>

          <li class="nav-item" v-if="StateUser.role != 1">
            <router-link to="/register"  class="nav-link">
              <i class="nav-icon fas fa-user"></i>
              Users
            </router-link>
          </li>
          <li class="nav-item" v-if="StateUser.role != 1">
            <router-link to="/withdrawals" class="nav-link">
              <i class="nav-icon fas fa-copy"></i>
              Retraits
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/spents" class="nav-link">
              <i class="nav-icon fas fa-copy"></i>
              Dépenses
            </router-link>
          </li>

          <li class="nav-item">
            <router-link to="/gallery" class="nav-link">
              <i class="nav-icon far fa-image"></i>
              <p>Galerie Produits</p>
            </router-link>
          </li>
        </ul>
      </nav>
      <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
  </aside>
</template>

<script>
import axios from "axios";
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters(["isAuthenticated", "StateUser"]),

    isLoggedIn: function () {
      return this.isAuthenticated;
    },
  },

  methods: {
    ...mapActions(["LogOut"]),

    async logout() {
      this.LogOut(this.StateUser);
      this.$router.push("/login");
    },
  },

  mounted() {
    axios
      .post("user")
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));
  },
};
</script>

<style>
</style>