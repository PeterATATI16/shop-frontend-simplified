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
                        Dépenses
                        <span class="badge badge-info right">
                          {{ resumSpents.length }}
                        </span>
                      </h3>
                    </div>

                    <div class="col-md-3">
                      <router-link
                        to="/new-spent"
                        type="button"
                        class="btn btn-block btn-primary btn-sm"
                      >
                        <ion-icon name="add-circle-outline"></ion-icon> DEPENSE
                      </router-link>
                    </div>
                  </div>

                  <div class="col-sm-3" v-show="users.length != 0">
                    <div class="form-group" v-show="userRole != 1">
                      <label>Tri Utilisateur</label>
                      <select class="custom-select" v-model="search">
                        <option></option>
                        <option v-for="(user, i) in users" :key="i">
                          {{ user.name }}
                        </option>
                      </select>
                    </div>
                  </div>
                  <!-- /.card-header -->
                  <div class="row">
                    <div class="col-12">
                      <div class="card">
                        <div class="card-header">
                          <h3 class="card-title">Liste Des Dépenses</h3>
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
                                <th>Montant</th>
                                <th v-show="userRole != 1">Gérant</th>
                                <th>Date</th>
                                <th>Motif</th>
                                <th>Created at</th>
                                <th>Updated at</th>
                                <th style="width: 20px">
                                  <ion-icon name="settings-outline"></ion-icon>
                                  ACTION
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <!-- _________________admin____________________________ -->
                              <tr v-for="(spent, i) in resumSpents" :key="i">
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
                                        @click="deleteSpent(spent.id)"
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
                                          name: 'UpdateSpent',
                                          params: { id: spent.id },
                                        }"
                                      >
                                        <ion-icon
                                          name="create-outline"
                                        ></ion-icon>
                                        Modifier
                                      </router-link>
                                      <div class="dropdown-divider"></div>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                            <tfoot>
                              <tr>
                                <th>Total</th>
                                <th v-if="userRole != 1">
                                  {{ formatPrice(spentTotal) }}
                                </th>
                                <th v-if="userRole != 0">
                                  {{ formatPrice(spentTotalByUser) }}
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
import SpentMixin from "../../../mixins/spent";
export default {
  mixins: [SpentMixin],
};
</script>