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
                    <div class="col-md-3">
                      <h3 class="card-title">
                        Products
                        <span class="badge badge-info right">
                          {{ allProductsFilter.length }}
                        </span>
                      </h3>
                    </div>

                    <div class="col-md-3">
                      <router-link
                        to="/new-product"
                        type="button"
                        class="btn btn-block btn-primary btn-sm"
                      >
                        <ion-icon name="add-circle-outline"></ion-icon> PRODUIT
                      </router-link>
                    </div>
                    <div class="col-md-6">
                      <button
                        @click="deleteRecords"
                        v-if="checked.length > 0"
                        class="btn btn-block btn-danger btn-sm"
                      >
                        <ion-icon name="trash-outline"></ion-icon>
                        SUPPRIMER
                        <span class="badge badge-secondary">{{
                          checked.length
                        }}</span>
                      </button>
                    </div>
                  </div>

                  <div class="col-sm-3" v-show="listOfCategories.length != 0">
                    <div class="form-group">
                      <label>Tri Category</label>
                      <select class="custom-select" v-model="search">
                        <option></option>
                        <option
                          v-for="(category, i) in listOfCategories"
                          :key="i"
                        >
                          {{ category.name }}
                        </option>
                      </select>
                    </div>
                  </div>
                  <!-- /.card-header -->
                  <div class="row">
                    <div class="col-12">
                      <div class="card">
                        <div class="card-header">
                          <h3 class="card-title">Liste Des Produits</h3>
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
                                <th><input
                                    type="checkbox"
                                    v-model="selectAll"
                                  /></th>
                                <th style="width: 10px">#</th>
                                <th>Nom</th>
                                <th>Price</th>
                                <th>Qty</th>
                                <th>Total</th>
                                <th>Category</th>
                                <th>Created at</th>
                                <th>Updated at</th>
                                <th v-show="userRole != 1">User</th>
                                <th style="width: 20px">
                                  <ion-icon name="settings-outline"></ion-icon>
                                  ACTION
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <!-- _________________admin____________________________ -->
                              <tr
                                v-for="(product, i) in allProductsFilter"
                                :key="i"
                              >
                                <td>
                                  <input
                                    type="checkbox"
                                    :value="product.id"
                                    v-model="checked"
                                  />
                                </td>
                                <td>{{ i + 1 }}</td>
                                <td>{{ product.name }}</td>
                                <td>{{ product.price }}</td>
                                <td
                                  :class="{
                                    'text-success': product.qty > 3,
                                    'text-danger': product.qty == 0,
                                    'text-warning': product.qty <= 3,
                                  }"
                                >
                                  {{ product.qty }}
                                </td>

                                <td>{{ formatPrice(product.total) }}</td>

                                <template
                                  v-for="(category, i) in listOfCategories"
                                  :key="i"
                                >
                                  <td v-if="product.category_id == category.id">
                                    {{ category.name }}
                                  </td>
                                </template>

                                <td>
                                  {{
                                    new Date(
                                      product.created_at
                                    ).toLocaleString()
                                  }}
                                </td>
                                <td>
                                  {{
                                    new Date(
                                      product.updated_at
                                    ).toLocaleString()
                                  }}
                                </td>
                                <div v-show="userRole != 1">
                                  <div v-for="(user, i) in users" :key="i">
                                    <td
                                      v-if="product.user_id == user.id"
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
                                        @click="deleteProduct(product.id)"
                                        type="button"
                                        class="dropdown-item"
                                      >
                                        <ion-icon
                                          name="trash-outline"
                                        ></ion-icon>
                                        Supprimer
                                      </button>
                                      <router-link
                                        class="
                                          dropdown-item
                                          nav-link nav-item
                                          btn
                                        "
                                        :to="{
                                          name: 'UpdateProduct',
                                          params: { id: product.id },
                                        }"
                                      >
                                        <ion-icon
                                          name="create-outline"
                                        ></ion-icon>
                                        Modifier
                                      </router-link>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                            <tfoot>
                              <tr>
                                <th>Total</th>
                                <th>
                                  {{ formatPrice(sumTotal) }}
                                </th>
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
import ProductMixin from "../../../mixins/product";
export default {
  mixins: [ProductMixin],
};
</script>