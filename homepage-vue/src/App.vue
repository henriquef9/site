<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Footer from './components/Footer.vue'
</script>

<template>
  <header>

    <div>Hello World!!!</div>

    <div class="wrapper">
      <RouterLink to="/">Home</RouterLink> 
    </div>
    <RouterView />
  </header>
  <Footer />
  
</template>

<style scoped>

</style>
