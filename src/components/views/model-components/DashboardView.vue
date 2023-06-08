<template>
  <div class="dashboard">
    <div class="template">
      <HomeView />
      <div class="component">
        <div class="content-wrapper">
          <!-- Content Header (Page header) -->
          <div class="content-header">
            <div class="container-fluid">
              <div class="row mb-2">
                <div class="col-sm-6">
                  <h1 class="m-0">Dashboard</h1>
                </div>
              </div>
              <!-- /.row -->
            </div>
            <!-- /.container-fluid -->
          </div>
          <!-- /.content-header -->

          <!-- Main content -->
          <section class="content">
            <div class="container-fluid">
              <!-- Info boxes -->
              <div class="row">
                <div class="col-12 col-sm-6 col-md-3">
                  <div class="info-box" v-show="userRole != 1">
                    <span class="info-box-icon bg-info elevation-1"
                      ><i class="fas fa-cog"></i
                    ></span>

                    <div class="info-box-content">
                      <span class="info-box-text">Rendement</span>
                      <span class="info-box-number">
                        {{ rendement }}
                        <small>%</small>
                      </span>
                    </div>
                    <!-- /.info-box-content -->
                  </div>
                  <div class="info-box">
                    <span class="info-box-icon bg-warning elevation-1"
                      ><i class="fas fa-cog"></i
                    ></span>

                    <div class="info-box-content">
                      <span class="info-box-text">Dépense</span>
                      <span class="info-box-number">
                        {{formatPrice(resumSpentTotal)}}
                        <small>FCFA</small>
                      </span>
                    </div>
                    <!-- /.info-box-content -->
                  </div>
                  <!-- /.info-box -->
                </div>
                <!-- /.col -->
                <div class="col-12 col-sm-6 col-md-3">
                  <div class="info-box mb-3">
                    <span class="info-box-icon bg-danger elevation-1"
                      ><i class="fas fa-thumbs-up"></i
                    ></span>

                    <div class="info-box-content">
                      <span class="info-box-text">Produits Vendus</span>
                      <span class="info-box-number">{{ resumQtyTotal }}</span>
                    </div>
                    <!-- /.info-box-content -->
                  </div>
                  <!-- /.info-box -->
                </div>
                <!-- /.col -->

                <!-- fix for small devices only -->
                <div class="clearfix hidden-md-up"></div>

                <div class="col-12 col-sm-6 col-md-3">
                  <div class="info-box mb-3">
                    <span class="info-box-icon bg-success elevation-1"
                      ><i class="fas fa-shopping-cart"></i
                    ></span>

                    <div class="info-box-content">
                      <span class="info-box-text">Total Ventes</span>
                      <span class="info-box-number">{{
                       formatPrice(resumSumTotal_sell)
                      }}</span>
                    </div>
                    <!-- /.info-box-content -->
                  </div>
                  <!-- /.info-box -->
                </div>
                <!-- /.col -->
                <div class="col-12 col-sm-6 col-md-3" v-show="userRole != 1">
                  <div class="info-box mb-3">
                    <span class="info-box-icon bg-warning elevation-1"
                      ><i class="fas fa-users"></i
                    ></span>

                    <div class="info-box-content">
                      <span class="info-box-text">Gérants</span>
                      <span class="info-box-number">{{
                        usersFilteredByRole.length
                      }}</span>
                    </div>
                    <!-- /.info-box-content -->
                  </div>
                  <!-- /.info-box -->
                </div>
                <div class="col-12 col-sm-6 col-md-3">
                  <div class="info-box mb-3" v-show="userRole != 0">
                    <span class="info-box-icon bg-primary elevation-1"
                      ><i class="fas fa-tag"></i
                    ></span>

                    <div class="info-box-content">
                      <span class="info-box-text">Somme Retirée</span>
                      <span class="info-box-number">{{formatPrice(withdrawalTotalResum)}} FCFA</span>
                    </div>
                    <!-- /.info-box-content -->
                  </div>
                  <!-- /.info-box -->
                </div>
                <div class="col-12 col-sm-6 col-md-3">
                  <div class="info-box mb-3" v-show="userRole != 0">
                    <span class="info-box-icon bg-warning elevation-1"
                      ><i class="fas fa-tag"></i
                    ></span>

                    <div class="info-box-content">
                      <span class="info-box-text">Reste</span>
                      <span class="info-box-number">{{formatPrice(resumRest)}} FCFA</span>
                    </div>
                    <!-- /.info-box-content -->
                  </div>
                  <!-- /.info-box -->
                </div>
                <!-- /.col -->
              </div>

              <!-- /.row -->

              <!-- Main row -->
              <div class="row">
                <!-- Left col -->
                <div class="col-md-8">
                  <div class="row"></div>
                  <!-- /.row -->

                  <!-- TABLE: LATEST ORDERS -->
                  <div class="card">
                    <div class="card-header border-transparent">
                      <h3 class="card-title">Dernieres Ventes</h3>

                      <div class="card-tools">
                        <button
                          type="button"
                          class="btn btn-tool"
                          data-card-widget="collapse"
                        >
                          <i class="fas fa-minus"></i>
                        </button>
                        <button
                          type="button"
                          class="btn btn-tool"
                          data-card-widget="remove"
                        >
                          <i class="fas fa-times"></i>
                        </button>
                      </div>
                    </div>
                    <!-- /.card-header -->
                    <div class="card-body p-0">
                      <div class="table-responsive">
                        <table class="table m-0">
                          <thead>
                            <tr>
                              <th style="width: 10px">#</th>
                              <th>Product</th>
                              <th>Price</th>
                              <th>Qty</th>
                              <th>Total</th>
                              <th>Created at</th>
                              <th>Updated at</th>
                              <th v-show="userRole != 1">Sells By</th>
                            </tr>
                          </thead>
                          <tbody>
                            <!-- _________________admin____________________________ -->
                            <tr v-for="(sell, i) in lastSells" :key="i">
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
                                {{ new Date(sell.created_at).toLocaleString() }}
                              </td>
                              <td>
                                {{ new Date(sell.updated_at).toLocaleString() }}
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
                                    <p v-if="user.role != 0" class="text-light">
                                      {{ user.name }} (gérant)
                                    </p>
                                  </td>
                                </div>
                              </div>
                            </tr>
                          </tbody>
                          <tfoot>
                            <tr>
                              <th>Total</th>
                              <th>{{ formatPrice(lastSumTotal) }}</th>

                              <th>Qty Sells</th>
                              <th>{{ formatPrice(lastQtySell) }}</th>
                            </tr>
                          </tfoot>
                        </table>
                      </div>
                      <!-- /.table-responsive -->
                    </div>
                    <!-- /.card-body -->
                    <div class="card-footer clearfix">
                      <router-link
                        to="/new-sell"
                        href="javascript:void(0)"
                        class="btn btn-sm btn-info float-left"
                        >Placer Vente</router-link
                      >
                      <router-link
                        to="/sells"
                        href="javascript:void(0)"
                        class="btn btn-sm btn-secondary float-right"
                        >Voir Tout</router-link
                      >
                    </div>
                    <!-- /.card-footer -->
                  </div>
                  <!-- /.card -->

                  <!-- TABLE: LATEST ORDERS -->
                  <div class="card">
                    <div class="card-header border-transparent">
                      <h3 class="card-title">Derniers Retraits</h3>

                      <div class="card-tools">
                        <button
                          type="button"
                          class="btn btn-tool"
                          data-card-widget="collapse"
                        >
                          <i class="fas fa-minus"></i>
                        </button>
                        <button
                          type="button"
                          class="btn btn-tool"
                          data-card-widget="remove"
                        >
                          <i class="fas fa-times"></i>
                        </button>
                      </div>
                    </div>
                    <!-- /.card-header -->
                    <div class="card-body p-0">
                      <div class="table-responsive">
                        <table class="table m-0">
                            <thead>
                              <tr>
                                <th style="width: 10px">#</th>
                                <th>Montant</th>
                                <th v-show="userRole != 1">Gérant</th>
                                <th>Date</th>
                                <th>Created at</th>
                                <th>Updated at</th>
                              </tr>
                            </thead>
                            <tbody>
                              <!-- _________________admin____________________________ -->
                              <tr v-for="(withdrawal, i) in lastWithdrawals" :key="i">
                                <td>{{ i + 1 }}</td>
                                <td>{{ formatPrice(withdrawal.amount) }}</td>

                                <div v-show="userRole != 1">
                                  <div v-for="(user, i) in users" :key="i">
                                    <td
                                      v-if="withdrawal.manager_id == user.id"
                                      class=""
                                    >
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
                                        {{ user.name }}
                                      </p>
                                    </td>
                                  </div>
                                </div>

                                <td>
                                  {{ withdrawal.date }}
                                </td>

                                <td>
                                  {{
                                    new Date(withdrawal.created_at).toLocaleString()
                                  }}
                                </td>
                                <td>
                                  {{
                                    new Date(withdrawal.updated_at).toLocaleString()
                                  }}
                                </td>
                              </tr>
                            </tbody>
                            <tfoot>
                              <tr>
                                <th>Total</th>
                                <th>
                                  {{ formatPrice(lastWithdrawalsTotal) }}
                                </th>
                              </tr>
                            </tfoot>
                          </table>
                      </div>
                      <!-- /.table-responsive -->
                    </div>
                    <!-- /.card-body -->
                    <div class="card-footer clearfix">
                      <router-link
                        to="/new-withdrawal"
                        href="javascript:void(0)"
                        class="btn btn-sm btn-info float-left"
                        >Faire Retrait</router-link
                      >
                      <router-link
                        to="/withdrawals"
                        href="javascript:void(0)"
                        class="btn btn-sm btn-secondary float-right"
                        >Voir Tout</router-link
                      >
                    </div>
                    <!-- /.card-footer -->
                  </div>
                  <!-- /.card -->

                  <!-- TABLE: LATEST ORDERS -->
                  <div class="card">
                    <div class="card-header border-transparent">
                      <h3 class="card-title">Dernieres Dépenses</h3>

                      <div class="card-tools">
                        <button
                          type="button"
                          class="btn btn-tool"
                          data-card-widget="collapse"
                        >
                          <i class="fas fa-minus"></i>
                        </button>
                        <button
                          type="button"
                          class="btn btn-tool"
                          data-card-widget="remove"
                        >
                          <i class="fas fa-times"></i>
                        </button>
                      </div>
                    </div>
                    <!-- /.card-header -->
                    <div class="card-body p-0">
                      <div class="table-responsive">
                        <table class="table m-0">
                          <thead>
                              <tr>
                                <th style="width: 10px">#</th>
                                <th>Montant</th>
                                <th v-show="userRole != 1">Gérant</th>
                                <th>Date</th>
                                <th>Motif</th>
                                <th>Created at</th>
                                <th>Updated at</th>
                              </tr>
                            </thead>
                            <tbody>
                              <!-- _________________admin____________________________ -->
                              <tr v-for="(spent, i) in lastSpents" :key="i">
                                <td>{{ i + 1 }}</td>
                                <td>{{ formatPrice(spent.amount) }}</td>

                                <div v-show="userRole != 1">
                                  <div v-for="(user, i) in users" :key="i">
                                    <td
                                      v-if="spent.manager_id == user.id"
                                      class=""
                                    >
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
                                        {{ user.name }}
                                      </p>
                                    </td>
                                  </div>
                                </div>

                                <td>
                                  {{ spent.date }}
                                </td>

                                <td>{{ spent.spent_reason }}</td>

                                <td>
                                  {{
                                    new Date(spent.created_at).toLocaleString()
                                  }}
                                </td>
                                <td>
                                  {{
                                    new Date(spent.updated_at).toLocaleString()
                                  }}
                                </td>
                              </tr>
                            </tbody>
                          <tfoot>
                            <tr>
                              <th>Total</th>
                              <th>{{ formatPrice(lastSpentsTotal) }}</th>
                            </tr>
                          </tfoot>
                        </table>
                      </div>
                      <!-- /.table-responsive -->
                    </div>
                    <!-- /.card-body -->
                    <div class="card-footer clearfix">
                      <router-link
                        to="/new-spent"
                        href="javascript:void(0)"
                        class="btn btn-sm btn-info float-left"
                        >Record Spent</router-link
                      >
                      <router-link
                        to="/spents"
                        href="javascript:void(0)"
                        class="btn btn-sm btn-secondary float-right"
                        >Voir Tout</router-link
                      >
                    </div>
                    <!-- /.card-footer -->
                  </div>
                  <!-- /.card -->


                </div>
                <!-- /.col -->

                <div class="col-md-4">
                  <div
                    class="info-box mb-3 bg-secondary"
                    v-show="userRole != 0"
                  >
                    <span class="info-box-icon"
                      ><i class="far fa-comment"></i
                    ></span>

                    <div class="info-box-content">
                      <span class="info-box-text">Somme Restante</span>
                      <span class="info-box-number">{{formatPrice(resumRest)}} FCFA</span>
                    </div>
                    <!-- /.info-box-content -->
                  </div>
                  <!-- Info Boxes Style 2 -->
                  <div v-show="userRole != 1">
                    <div class="info-box mb-3 bg-warning">
                      <span class="info-box-icon"
                        ><i class="fas fa-tag"></i>
                      </span>

                      <div class="info-box-content">
                        <span class="info-box-text">Total Capital</span>
                        <span class="info-box-number"
                          >{{ formatPrice(resumTotal) }} FCFA</span
                        >
                      </div>
                      <!-- /.info-box-content -->
                    </div>
                    <!-- /.info-box -->
                    <div class="info-box mb-3 bg-success">
                      <span class="info-box-icon"
                        ><i class="far fa-heart"></i
                      ></span>

                      <div class="info-box-content">
                        <span class="info-box-text">Retour Sur Capital</span>
                        <span class="info-box-number">{{
                          formatPrice(resumSumTotal_sell)
                        }} FCFA</span>
                      </div>
                      <!-- /.info-box-content -->
                    </div>
                    <!-- /.info-box -->
                    <div class="info-box mb-3 bg-danger">
                      <span class="info-box-icon"
                        ><i class="fas fa-cloud-download-alt"></i
                      ></span>

                      <div class="info-box-content">
                        <span class="info-box-text">Reste</span>
                        <span class="info-box-number">{{ formatPrice(reste) }} FCFA</span>
                      </div>
                      <!-- /.info-box-content -->
                    </div>
                    <!-- /.info-box -->
                    <div class="info-box mb-3 bg-info">
                      <span class="info-box-icon"
                        ><i class="far fa-comment"></i
                      ></span>

                      <div class="info-box-content">
                        <span class="info-box-text"
                          >Somme Retirée Chez Gérants</span
                        >
                        <span class="info-box-number">{{formatPrice(withdrawalTotalResum)}} FCFA</span>
                      </div>
                      <!-- /.info-box-content -->
                    </div>
                    <div class="info-box mb-3 bg-secondary">
                      <span class="info-box-icon"
                        ><i class="far fa-comment"></i
                      ></span>

                      <div class="info-box-content">
                        <span class="info-box-text">Somme Restante</span>
                        <span class="info-box-number" v-if="resumSumTotal_sell > 0 ">{{formatPrice(resumRest)}} FCFA</span>
                        <span class="info-box-number" v-if="resumSumTotal_sell == 0 || resumSells < withdrawalTotalResum">0 FCFA</span>
                      </div>
                      <!-- /.info-box-content -->
                    </div>
                  </div>
                  <!-- /.info-box -->
                </div>
                <!-- /.col -->
              </div>
              <!-- /.row -->
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
import DashboardMixin from "../../mixins/dashboard";


export default {
  mixins: [DashboardMixin],
};
</script>