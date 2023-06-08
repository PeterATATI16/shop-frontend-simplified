<template>
  <div class="gallery">
    <HomeView />
    <div class="component">
      <div class="content-wrapper">
        <section
          class="content container-fluid"
          v-for="(product, i) in allProducts"
          :key="i"
        >
          <div class="col-md-9 mx-auto">
            <div class="col-md-12">
              <!-- Box Comment -->
              <div class="card card-widget">
                <div class="card-header">
                  <div class="user-block">
                    <span class="username" v-for="(user, i) in users" :key="i"
                      ><h4 href="#" v-if="user.id == product.user_id">{{ user.name }}</h4></span
                    >
                    <span class="description">{{
                      new Date(product.created_at).toLocaleString()
                    }}</span>
                  </div>
                  <!-- /.user-block -->
                  <div class="card-tools">
                    <button
                      type="button"
                      class="btn btn-tool"
                      title="Mark as read"
                    >
                      <i class="far fa-circle"></i>
                    </button>
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
                  <!-- /.card-tools -->
                </div>
                <!-- /.card-header -->
                <div class="card-body mx-auto" style="display: block">
                  <img
                    class="img-fluid pad"
                    :src="`${imgUrl + '/' + product.image}`"
                    alt="Photo"
                  />

                  <p></p>
                  <button
                    v-show="product.qty > 0 && product.qty < 3"
                    type="button"
                    class="btn btn-warning btn-sm bt"
                  >
                    Stock Faible
                  </button>

                  <button
                    v-show="product.qty > 3"
                    type="button"
                    class="btn btn-success btn-sm bt"
                  >
                    Disponible
                  </button>
                  <button
                    v-show="product.qty == 0"
                    type="button"
                    class="btn btn-danger btn-sm bt"
                  >
                    Epuisé
                  </button>

                  <span class="float-right text-muted"
                    >nom : {{ product.name }} || prix unitaire :
                    {{ product.price }} || quantité : {{ product.qty }}</span
                  >
                </div>
              </div>
            </div>
          </div>
        </section>
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

<style>
.pad {
  width: 300px;
}
</style>