<template>
  <nav class="main-header navbar navbar-expand navbar-dark d-flex">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" data-widget="pushmenu" href="#" role="button"
          ><i class="fas fa-bars"></i
        ></a>
      </li>
      <li class="nav-item d-none d-sm-inline-block">
        <a href="index3.html" class="nav-link">Home</a>
      </li>
      <li class="nav-item d-none d-sm-inline-block">
        <a href="#" class="nav-link">Contact</a>
      </li>
    </ul>
    <div class="navbar-nav date">
      <li class="nav-item d-none d-sm-inline-block" v-show="date">
        <strong>Date:</strong> {{ date }} |
        <strong>Heure :</strong> {{ currentTime }}
      </li>
    </div>
  </nav>
</template>

<script>
import DateMixin from "../../mixins/date";

export default {
  mixins: [DateMixin],
};
</script>

<style>
</style>