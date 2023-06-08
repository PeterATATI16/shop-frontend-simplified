<template>
  <div class="dashboard">
    <div class="template">
      <HomeView />
      <div class="component">
        <div class="content-wrapper">
          <!-- Main content -->
          <section class="content">
            <div class="container-fluid">
              <div class="">
                <div class="card">
                  <div class="card-header d-flex col-md-6">
                    <div class="col-md-6">
                      <h3 class="card-title">
                        Registre de ventes
                        <span class="badge badge-info right">
                          {{ resumSolds.length }}
                        </span>
                      </h3>
                    </div>
                  </div>

                  <div
                    class="col-sm-3"
                    v-show="resumListOfProducts.length != 0"
                  >
                    <div class="form-group">
                      <label>Tri Produit</label>
                      <select class="custom-select" v-model="search">
                        <option></option>
                        <option
                          v-for="(product, i) in resumListOfProducts"
                          :key="i"
                        >
                          {{ product.name }}
                        </option>
                      </select>
                    </div>
                  </div>
                  <!-- /.card-header -->
                  <div class="row">
                    <div class="col-12">
                      <div class="card">
                        <div class="card-header">
                          <h3 class="card-title">Liste Complete Des Ventes</h3>
                          <router-link
                            to="/sells"
                            type="submit"
                            class="btn btn-danger"
                            style="margin-left: 4px"
                            ><ion-icon
                              name="arrow-back-circle-outline"
                            ></ion-icon
                          ></router-link>
                          <div class="card-tools">
                            <div
                              class="input-group input-group-sm"
                              style="width: 150px"
                            >
                              <input
                                type="text"
                                v-model="search_by_name"
                                class="form-control float-right"
                                placeholder="Search"
                              />
                              <div class="input-group-append">
                                <button type="submit" class="btn btn-default">
                                  <i class="fas fa-search"></i>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div
                          class="card-body table-responsive p-0"
                          style="height: 300px"
                        >
                          <table class="table table-head-fixed text-nowrap">
                            <thead>
                              <tr>
                                <th style="width: 10px">#</th>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Qty</th>
                                <th>Total</th>
                                <th>Created at</th>
                                <th>Updated at</th>
                                <th v-show="userRole != 1">Sold By</th>
                                <!-- <th style="width: 20px">
                                    <ion-icon name="settings-outline"></ion-icon>
                                    ACTION
                                  </th> -->
                              </tr>
                            </thead>
                            <tbody>
                              <!-- _________________admin____________________________ -->
                              <tr v-for="(sell, i) in resumSolds" :key="i">
                                <td>{{ i + 1 }}</td>

                                <template
                                  v-for="(product, i) in allProducts"
                                  :key="i"
                                >
                                  <td v-if="sell.product_id == product.id">
                                    {{ product.name }}
                                  </td>
                                </template>

                                <td>{{ sell.price }}</td>
                                <td>
                                  {{ sell.qty }}
                                </td>
                                <td>{{ formatPrice(sell.total) }}</td>
                                <td>
                                  {{
                                    new Date(sell.created_at).toLocaleString()
                                  }}
                                </td>
                                <td>
                                  {{
                                    new Date(sell.updated_at).toLocaleString()
                                  }}
                                </td>
                                <div v-show="userRole != 1">
                                  <div v-for="(user, i) in users" :key="i">
                                    <td v-if="sell.user_id == user.id" class="">
                                      <p
                                        v-if="user.role != 1"
                                        class="text-warning"
                                      >
                                        {{ user.name }}
                                      </p>
                                      <p
                                        v-if="user.role != 0"
                                        class="text-light"
                                      >
                                        {{ user.name }} (gérant)
                                      </p>
                                    </td>
                                  </div>
                                </div>

                                <!-- <td>
                                    <div class="btn-group">
                                      <button
                                        type="button"
                                        class="btn btn-info dropdown-toggle"
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                      >
                                        Choisir
                                      </button>
                                      <div
                                        class="dropdown-menu"
                                        x-placement="bottom-start"
                                        style="
                                          position: absolute;
                                          transform: translate3d(0px, 38px, 0px);
                                          top: 0px;
                                          left: 0px;
                                          will-change: transform;
                                        "
                                      >
                                        <button
                                          @click="deleteSell(sell.id)"
                                          type="button"
                                          class="dropdown-item"
                                        >
                                          <ion-icon
                                            name="trash-outline"
                                          ></ion-icon>
                                          Supprimer
                                        </button>
                                      </div>
                                    </div>
                                  </td> -->
                              </tr>
                            </tbody>
                            <tfoot>
                              <tr>
                                <th>Total</th>
                                <th>{{ formatPrice(resumSumTotal) }}</th>

                                <th>Qty Sells</th>
                                <th>{{ formatPrice(resumQtyTotal) }}</th>
                              </tr>
                            </tfoot>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- /.card-body -->
                </div>
                <!-- /.card -->
              </div>
            </div>
            <!--/. container-fluid -->
          </section>
          <!-- /.content -->
        </div>
      </div>
      <FooterComponent />
    </div>
  </div>
</template>
      
  <script>
import SoldMixin from "../../../mixins/sold";
export default {
  mixins: [SoldMixin],
};
</script>