<template>
  <div class="new-product">
    <HomeView />
    <div class="component">
      <div class="content-wrapper">
        <div class="content">
          <div class="container-fluid">
            <div class="card card-primary row">
              <div class="card-header">
                <h3 class="card-title">Ajouter Une Vente</h3>
              </div>
              <!-- /.card-header -->
              <!-- form start -->
              <form @submit.prevent="addNewSell" enctype="multipart/form-data">
                <div class="card-body row">
                  <div class="col-md-3">
                    <!-- select -->
                    <div class="form-group">
                      <label>Product</label>
                      <select
                      @change="updateValues"
                        @click="authId"
                        required
                        v-model="sell.product_id"
                        class="form-control"
                      >
                        <option
                          class="input"
                          selected
                          v-for="(product, i) in fectchProducts"
                          :key="i"
                          :value="product.id"
                        >
                          {{ product.name }} | {{ product.price }} FCFA | Qty =
                          {{ product.qty }}
                        </option>
                      </select>
                    </div>
                  </div>

                  <div class="form-group col-md-3">
                    <label for="exampleInputPassword1">prix</label>
                    <input
                      required
                      @keyup="prix_total"
                      v-model="sell.price"
                      type="number"
                      class="form-control"
                      id="exampleInputPassword1"
                      placeholder=""
                    />
                  </div>
                  <div class="form-group col-md-3">
                    <label for="exampleInputPassword1">qté</label>
                    <input
                    @click="loadProduct"
                      required
                      @keyup="prix_total"
                      v-model="sell.qty"
                      type="number"
                      class="form-control"
                      id="exampleInputPassword1"
                      placeholder=""
                    />
                  </div>
                  <div class="form-group col-md-3">
                    <label for="exampleInputPassword1">total</label>
                    <input
                      required
                      v-model="sell.total"
                      type="number"
                      class="form-control"
                      id="exampleInputPassword1"
                      placeholder=""
                    />
                  </div>

                  <div class="form-group col-md-3" hidden>
                    <label for="exampleInputPassword1">auth</label>
                    <input
                      v-model="sell.user_id"
                      type="number"
                      class="form-control"
                      id="exampleInputPassword1"
                      placeholder=""
                    />
                  </div>
                </div>
                <p v-show="addConfirm" class="text-success">
                  la vente a été enrégistrée avec success
                </p>
                <!-- /.card-body -->

                <div class="card-footer">
                  <button type="submit" class="btn btn-primary">Ajouter</button>
                  <router-link
                    to="/sells"
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
import SellMixin from "../../../mixins/sell";

export default {
  mixins: [SellMixin],
};
</script>
    
  