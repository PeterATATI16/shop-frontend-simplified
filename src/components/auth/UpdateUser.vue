<template>
    <div class="new-product">
      <HomeView />
      <div class="component">
        <div class="content-wrapper">
          <div class="content">
            <div class="container-fluid">
              <div class="card card-primary row">
                <div class="card-header">
                  <h3 class="card-title">Nouvel Utilisateur</h3>
                </div>
                <!-- /.card-header -->
                <!-- form start -->
                <form
                  @submit.prevent="addNewUser"
                  enctype="multipart/form-data"
                >
                  <div class="card-body row">
                    <div class="form-group col-md-3">
                      <label for="exampleInputEmail1">nom</label>
                      <input
                        required
                        @keyup="authId"
                        v-model="user.name"
                        type="text"
                        class="form-control"
                        id="exampleInputEmail1"
                        placeholder=""
                      />
                    </div>
                    <div class="form-group col-md-3">
                      <label for="exampleInputPassword1">email</label>
                      <input
                        required
                        v-model="user.email"
                        type="email"
                        class="form-control"
                        id="exampleInputPassword1"
                        placeholder=""
                      />
                    </div>
                    <div class="form-group col-md-3">
                      <label for="exampleInputPassword1">numéro</label>
                      <input
                        required
                        v-model="user.phone"
                        type="number"
                        class="form-control"
                        id="exampleInputPassword1"
                        placeholder=""
                      />
                    </div>
                    <div class="form-group col-md-3">
                      <label for="exampleInputPassword1">mot de passe</label>
                      <input
                        required
                        v-model="user.password"
                        type="text"
                        class="form-control"
                        id="exampleInputPassword1"
                        placeholder=""
                      />
                    </div>
                                        
                    <p v-show="addConfirm" class="text-success">
                      utiklisateur enrégistré
                    </p>

                  </div>
                  <!-- /.card-body -->
  
                  <div class="card-footer">
                    <button type="submit" class="btn btn-primary">Ajouter</button>
                    <router-link
                      to="/products"
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
  import UserMixin from "../mixins/user";
  export default {
    mixins: [UserMixin],
  };
  </script>
    