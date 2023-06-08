<template>
    <div class="home">
        <HorizontalNav/>
        <VerticalNav/>
    </div>
</template>

<script>
import HorizontalNav from './adminlte/HorizontalNav.vue';
import VerticalNav from './adminlte/VerticalNav.vue';



export default {
    components: { 
      HorizontalNav,
      VerticalNav,
    }

}
</script>

<style>

</style>