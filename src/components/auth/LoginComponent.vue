<template>
  <StarterPage />
  <div class="content">
    <div class="auth-form container">
      <div class="login-box log row mx-auto col-md-12">
        <div class="login-logo">
          <a href="../../index2.html"><b>Admin</b>LTE</a>
        </div>
        <!-- /.login-logo -->
        <div class="card row col-md-12">
          <div class="card-body log login-card-body mx-auto">
            <p class="login-box-msg">Sign in to start your session</p>

            <form
              id="data-form"
              @submit.prevent="submit"
              enctype="multipart/form-data"
            >
              <div class="input-group mb-3">
                <input
                  v-model="user.email"
                  type="email"
                  class="form-control"
                  placeholder="Email"
                />
                <div class="input-group-append">
                  <div class="input-group-text">
                    <span class="fas fa-envelope"></span>
                  </div>
                </div>
              </div>
              <div class="input-group mb-3">
                <input
                  v-model="user.password"
                  type="password"
                  class="form-control"
                  placeholder="Password"
                />
                <div class="input-group-append">
                  <div class="input-group-text">
                    <span class="fas fa-lock"></span>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-8">
                  <div class="icheck-primary">
                    <input type="checkbox" id="remember" />
                    <label for="remember"> Remember Me </label>
                  </div>
                </div>
                <!-- /.col -->
                <div class="col-4">
                  <button type="submit" class="btn btn-primary btn-block">
                    Sign In
                  </button>
                </div>
                <!-- /.col -->
              </div>
            </form>
            <div class="social-auth-links text-center mb-3">
              <p>- OR -</p>
              <a href="#" class="btn btn-block btn-primary">
                <i class="fab fa-facebook mr-2"></i> Sign in using Facebook
              </a>
              <a href="#" class="btn btn-block btn-danger">
                <i class="fab fa-google-plus mr-2"></i> Sign in using Google+
              </a>
            </div>
            <!-- /.social-auth-links -->

            <p class="mb-1">
              <a href="forgot-password.html">I forgot my password</a>
            </p>
            <p class="mb-0">
              <a href="register.html" class="text-center"
                >Register a new membership</a
              >
            </p>
          </div>
          <!-- /.login-card-body -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import StarterPage from "../views/adminlte/StarterPage.vue";

import { mapActions, mapGetters } from "vuex";

import { useToastr } from "../mixins/utils/toastr";

const toastr = useToastr();

export default {
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
    };
  },

  methods: {
    ...mapActions(["LogIn"]),
    /*----------------------------------------------------------------- */

    async submit() {
      const User = new FormData();
      User.append("email", this.user.email);
      User.append("password", this.user.password);

      try {
        if (this.user.email && this.user.password) {
          await this.LogIn(User);
          this.$router.push("/");
        } else {
          toastr.error("tous les champs sont sont requis");
        }
      } catch (error) {
        if (this.getLoginError) {
          toastr.error(this.getLoginError);
        }
      }
    },

    // login() {
    //   axios
    //     .post("login", {
    //       email: this.user.email,
    //       password: this.user.password,
    //     })
    //     .then((response) => {
    //       this.$router.push("/");
    //     })
    //     .catch((error) => {
    //       toastr.error(error.response.data.message);
    //     });
    // },
    /*----------------------------------------------------------------- */
  },

  computed: {
    ...mapGetters(["StateUser"]),

    userRole() {
      return this.StateUser.role;
    },
  },

  components: {
    StarterPage,
  },
};
</script>

<style>
.log {
  justify-content: center;
  width: 300px;
}
</style>