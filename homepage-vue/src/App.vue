<script setup>
import Footer from './components/Footer.vue';
import ButtonMeeting from './components/Button.vue'
</script>

<template>
  <header class="container">
    <RouterLink to="/"> Home </RouterLink>
    <RouterView />
  </header>

  <ButtonMeeting />

  <Footer />

</template>

<script>
export default {

}
</script>

<style scoped>

.v-enter, .v-leave-to{
  opacity: 0;
}

.v-enter-active, .v-leave-active{
  transition: opacity 1s;
}

</style>
