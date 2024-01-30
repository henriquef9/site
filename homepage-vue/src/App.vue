<script setup>
import ButtonMeeting from './components/Button.vue';
import Navbar from './components/Navbar.vue';
</script>

<template>

  <div id="section-home" class="bg-black text-white">

    <Navbar />

    <div class="content-home">
      <h1 class="text-uppercase text-center title-home">CRIANDO UM NOVO CONCEITO DE COMO APLICATIVOS <span class="text-purple">SÃO FEITOS</span></h1>
      <h2 class="text-center caption-home">Potencialize sua presença online!</h2>
    </div>

  </div>

  <hr class="d-md-none w-50 m-4 bg-white opacity-100 my-5" style="height: 3px;">

  <div id="section-about" class="row bg-black">

    <div id="img-about" class="d-none d-md-block col-md-5">

    </div>

    <div class="col col-md-7 content-about">
        <div class="text-white mb-5 w-75">
            <h2 class="title-about">Nossa <span class="text-purple">História</span></h2>
            <p class="text-about">Seu passaporte para o futuro digital está nas nossas mãos. Desenvolvemos soluções inovadoras que catapultam sua presença online para o próximo nível. Estamos prontos para guiá-lo nessa jornada transformadora. Vamos criar juntos o caminho para o sucesso digital.</p>
        </div>
    </div>
  </div>

  <ButtonMeeting />

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
