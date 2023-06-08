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
                        Managers
                        <span class="badge badge-info right">
                          {{ users.length }}
                        </span>
                      </h3>
                    </div>

                    <div class="col-md-3">
                      <router-link
                        to="/new-user"
                        type="button"
                        class="btn btn-block btn-primary btn-sm"
                      >
                        <ion-icon name="add-circle-outline"></ion-icon> MANAGER
                      </router-link>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-12">
                      <div class="card">
                        <div class="card-header">
                          <h3 class="card-title">Liste Des Gérants</h3>
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
                                <th>Nom</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Created at</th>
                                <th>Updated at</th>
                                <th style="width: 20px">
                                  <ion-icon name="settings-outline"></ion-icon>
                                  ACTION
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr v-for="(manager, i) in users" :key="i">
                                <td>{{ i + 1 }}</td>
                                <td>{{ manager.name }}</td>
                                <td>{{ manager.email }}</td>
                                <td>{{ manager.phone }}</td>
                                <td>
                                  {{
                                    new Date(
                                      manager.created_at
                                    ).toLocaleString()
                                  }}
                                </td>
                                <td>
                                  {{
                                    new Date(
                                      manager.updated_at
                                    ).toLocaleString()
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
                                        @click="deleteManager(manager.id)"
                                        type="button"
                                        class="dropdown-item"
                                      >
                                        <ion-icon
                                          name="trash-outline"
                                        ></ion-icon>
                                        Supprimer
                                      </button>
                                      <!-- <router-link
                                        class="
                                          dropdown-item
                                          nav-link nav-item
                                          btn
                                        "
                                        :to="{
                                          name: 'UpdateCategory',
                                          params: { id: manager.id },
                                        }"
                                      >
                                        <ion-icon
                                          name="create-outline"
                                        ></ion-icon>
                                        Modifier
                                      </router-link> -->
                                      <!-- <div class="dropdown-divider"></div> -->
                                    </div>
                                  </div>
                                </td>
                                
                              </tr>
                            </tbody>
                            
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
import UserMixin from "../mixins/user";
export default {
  mixins: [UserMixin],
};
</script>