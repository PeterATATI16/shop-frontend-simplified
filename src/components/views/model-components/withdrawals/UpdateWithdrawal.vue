<template>
  <div class="new-product">
    <HomeView />
    <div class="component">
      <div class="content-wrapper">
        <div class="content">
          <div class="container-fluid">
            <div class="card card-primary row">
              <div class="card-header">
                <h3 class="card-title">Edit de retrait</h3>
              </div>
              <!-- /.card-header -->
              <!-- form start -->
              <form @submit.prevent="UpdateWithdrawal" enctype="multipart/form-data">
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
                      @click="authId"
                      required
                      v-model="withdrawal.amount"
                      type="number"
                      class="form-control"
                      id="exampleInputEmail1"
                      placeholder=""
                    />
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
                  <p v-show="updateConfirm" class="text-success">
                    le retrait a été modifié
                  </p>
                </div>
                <!-- /.card-body -->

                <div class="card-footer">
                  <button type="submit" class="btn btn-primary">Update</button>
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
export default {
  mixins: [WithdrawalMixin],
};
</script>