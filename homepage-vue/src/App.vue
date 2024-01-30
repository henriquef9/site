<script setup>
import Footer from './components/Footer.vue';
import ButtonMeeting from './components/Button.vue';
</script>

<template>

  <p class="text-white"> Ano Atual: {{ currentYear }} </p>
  <ButtonMeeting />

  <Footer />

</template>

<script>
export default {
  data(){
    return {
      currentYear: new Date().getFullYear()
    }
  }
}
</script>

<style scoped>


</style>
