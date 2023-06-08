<template>
  <div class="new-product">
    <HomeView />
    <div class="component">
      <div class="content-wrapper">
        <div class="content">
          <div class="container-fluid">
            <div class="card card-primary row">
              <div class="card-header">
                <h3 class="card-title">Edit de categorie</h3>
              </div>
              <!-- /.card-header -->
              <!-- form start -->
              <form @submit.prevent="updCategory" enctype="multipart/form-data">
                <div class="card-body row">
                  <div class="form-group col-md-3">
                    <label for="exampleInputEmail1">nom</label>
                    <input
                      required
                      v-model="category.name"
                      type="text"
                      class="form-control"
                      id="exampleInputEmail1"
                      placeholder=""
                    />
                    <p v-show="updateConfirm" class="text-success">
                      nom de catégorie mis à jour
                    </p>
                  </div>
                </div>
                <!-- /.card-body -->

                <div class="card-footer">
                  <button type="submit" class="btn btn-primary">Update</button>
                  <router-link
                    to="/categories"
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
import CategoryMixin from "../../../mixins/category";
export default {
  mixins: [CategoryMixin],
};
</script>
  