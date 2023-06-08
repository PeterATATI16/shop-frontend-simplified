<template>
  <div class="new-product">
    <HomeView />
    <div class="component">
      <div class="content-wrapper">
        <div class="content">
          <div class="container-fluid">
            <div class="card card-primary row">
              <div class="card-header">
                <h3 class="card-title">Ajout de produit</h3>
              </div>
              <!-- /.card-header -->
              <!-- form start -->
              <form
                @submit.prevent="addNewProduct"
                enctype="multipart/form-data"
              >
                <div class="card-body row">
                  <div class="form-group col-md-3">
                    <label for="exampleInputEmail1">nom</label>
                    <input
                      required
                      @keyup="authId"
                      v-model="product.name"
                      type="text"
                      class="form-control"
                      id="exampleInputEmail1"
                      placeholder=""
                    />
                  </div>
                  <div class="form-group col-md-3">
                    <label for="exampleInputPassword1">prix</label>
                    <input
                      required
                      @keyup="prix_total"
                      v-model="product.price"
                      type="number"
                      class="form-control"
                      id="exampleInputPassword1"
                      placeholder=""
                    />
                  </div>
                  <div class="form-group col-md-3">
                    <label for="exampleInputPassword1">qté</label>
                    <input
                      required
                      @keyup="prix_total"
                      v-model="product.qty"
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
                      v-model="product.total"
                      type="number"
                      class="form-control"
                      id="exampleInputPassword1"
                      placeholder=""
                    />
                  </div>
                  <div class="col-md-6">
                    <!-- select -->
                    <div class="form-group">
                      <label>categorie</label>
                      <select
                        required
                        v-model="product.category_id"
                        class="form-control"
                      >
                        <option
                          class="input"
                          selected
                          v-for="(category, i) in listOfCategories"
                          :key="i"
                          :value="category.id"
                        >
                          {{ category.name }}
                        </option>
                      </select>
                    </div>
                  </div>

                  <div class="form-outline col-md-6">
                    <label class="form-label" for="customFile">image</label>
                    <input
                      required
                      name="image"
                      type="file"
                      class="form-control"
                      id=""
                      @change="saveImage"
                    />
                  </div>

                  <div class="form-group col-md-3" hidden>
                    <label for="exampleInputPassword1">auth</label>
                    <input
                      v-model="product.user_id"
                      type="number"
                      class="form-control"
                      id="exampleInputPassword1"
                      placeholder=""
                    />
                  </div>
                  <p v-show="addConfirm" class="text-success">
                    le produit a été enrégistré avec success
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
import ProductMixin from "../../../mixins/product";
export default {
  mixins: [ProductMixin],
};
</script>
  