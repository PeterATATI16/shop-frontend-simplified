<template>
  <div class="new-product">
    <HomeView />
    <div class="component">
      <div class="content-wrapper">
        <div class="content">
          <div class="container-fluid">
            <div class="card card-primary row">
              <div class="card-header">
                <h3 class="card-title">Ajout de retrait</h3>
              </div>
              <!-- /.card-header -->
              <!-- form start -->
              <form
                @submit.prevent="addNewWithdrawal"
                enctype="multipart/form-data"
              >
                <div class="card-body row">
                  <div class="col-md-4" v-if="userRole != 1">
                    <!-- select -->
                    <div class="form-group">
                      <label>Gérant</label>
                      <select
                        required
                        v-model="withdrawal.manager_id"
                        class="form-control"
                      >
                        <option
                          class="input"
                          selected
                          v-for="(user, i) in users"
                          :key="i"
                          :value="user.id"
                        >
                          {{ user.name }}
                        </option>
                      </select>
                    </div>
                  </div>
                  <div class="form-group col-md-4">
                    <label for="exampleInputEmail1">Montant</label>
                    <input
                      :disabled="resumRest == 0"
                      @click="authId"
                      @keyup="wAmount"
                      required
                      v-model="withdrawal.amount"
                      type="number"
                      class="form-control"
                      id="exampleInputEmail1"
                      placeholder=""
                    />
                    <p
                      class="text-danger"
                      v-show="resumRest < withdrawal.amount"
                    >
                      sommme insuffisante dans la caisse
                    </p>
                  </div>
                  <div class="form-group col-md-4">
                    <label>date:</label>
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text">
                          <i class="far fa-calendar-alt"></i>
                        </span>
                      </div>
                      <input
                        required
                        v-model="withdrawal.date"
                        type="date"
                        class="form-control float-right"
                        id="reservation"
                      />
                    </div>
                  </div>
                  <div class="form-group col-md-3" v-if="userRole != 0">
                    <label for="exampleInputPassword1">auth</label>
                    <input
                      disabled
                      v-model="withdrawal.manager_id"
                      type="number"
                      class="form-control"
                      id="exampleInputPassword1"
                      placeholder=""
                    />
                  </div>
                  <p>
                    Disponible dans la caisse :
                    <span class="badge badge-warning">{{
                      formatPrice(resumRest)
                    }}</span>
                  </p>
                  <br />
                  <p v-show="addConfirm" class="text-success">
                    le retrait a été enrégistré avec success
                  </p>
                </div>
                <!-- /.card-body -->

                <div class="card-footer">
                  <button
                    :disabled="resumRest < am || resumRest == 0"
                    type="submit"
                    class="btn btn-primary"
                  >
                    Ajouter
                  </button>
                  <router-link
                    to="/withdrawals"
                    type="submit"
                    class="btn btn-danger"
                    style="margin-left: 4px"
                    ><ion-icon name="arrow-back-circle-outline"></ion-icon
                  ></router-link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <FooterComponent />
  </div>
</template>
  
<script>
import WithdrawalMixin from "../../../mixins/withdrawal";
import DashMixin from "../../../mixins/dashboard";
export default {
  mixins: [WithdrawalMixin, DashMixin],

  methods: {},

  computed: {
    resumRest() {
      return this.resumSumTotal_sell - this.withdrawalTotalResum;
    },
  },

  mounted() {},
};
</script>