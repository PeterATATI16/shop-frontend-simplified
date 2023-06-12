<template>
  <div class="new-product">
    <HomeView />
    <div class="component">
      <div class="content-wrapper">
        <div class="content mx-auto container-fluid">
          <div class="card card-primary">
            <div class="card-header">
              <h3 class="card-title">Mise à jour produit</h3>
            </div>
            <!-- /.card-header -->
            <!-- form start -->
            <form @submit.prevent="UpdateProduct" enctype="multipart/form-data">
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
                    placeholder="entrer le nom du produit"
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
                    name="image"
                    type="file"
                    class="form-control"
                    id="image"
                    @change="saveImage"
                  />
                </div>
                <div class="form-group col-md-3" hidden>
                  <label for="exampleInputPassword1">auth</label>
                  <input
                    required
                    v-model="product.user_id"
                    type="number"
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder=""
                  />
                </div>
                <div
                  class="
                    blog-img
                    position-relative
                    overflow-hidden
                    product-img
                    mx-auto
                  "
                >
                  <img
                    required
                    class="img-fluid mx-auto"
                    :src="`${imgUrl + '/' + product.image}`"
                    alt=""
                  />
                </div>
              </div>
              <!-- /.card-body -->

              <div class="card-footer">
                <button type="submit" class="btn btn-primary">Update</button>
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
    <FooterComponent />
  </div>
</template>
  
<script>
import ProductMixin from "../../../mixins/product";
export default {
  mixins: [ProductMixin],
};
</script>
