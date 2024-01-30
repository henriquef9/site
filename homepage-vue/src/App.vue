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

  <section id="about" class="row bg-black">

    <div id="img-about" class="d-none d-md-block col-md-5">

    </div>

    <div class="col col-md-7 content-about">
        <div class="text-white mb-5 w-75">
            <h2 class="title-about">Nossa <span class="text-purple">História</span></h2>
            <p class="text-about">Seu passaporte para o futuro digital está nas nossas mãos. Desenvolvemos soluções inovadoras que catapultam sua presença online para o próximo nível. Estamos prontos para guiá-lo nessa jornada transformadora. Vamos criar juntos o caminho para o sucesso digital.</p>
        </div>
    </div>
  </section>
  <section id="service">
        
    <div class="content-service text-white text-center">
      <h2 class="title-service">Nossos Serviços</h2>
      <p class="text-service">Destaque-se na web com nossos serviços exclusivos.</p>
    </div>

    <div class="group-services text-white text-center row">

      <div class="service col-12 col-md-4">
        <div class="d-flex justify-content-center my-4">
          <div class="bg-icon bg-white d-flex justify-content-center align-items-center">
            <div id="icon-service-1" class="icon-service bg-white"></div>
          </div>
        </div>

        <div>
          <h3>Serviço 1</h3>
          <p>Optimize manpower to benefit your business.</p>
        </div>
      </div>

      <div class="service col-12 col-md-4">
        <div class="d-flex justify-content-center my-4">
          <div class="bg-icon bg-white d-flex justify-content-center align-items-center">
            <div id="icon-service-2" class="icon-service bg-white"></div>
          </div>
        </div>

        <div>
          <h3>Serviço 1</h3>
          <p>Optimize manpower to benefit your business.</p>
        </div>
      </div>

      <div class="service col-12 col-md-4">
        <div class="d-flex justify-content-center my-4">
          <div class="bg-icon bg-white d-flex justify-content-center align-items-center">
            <div id="icon-service-3" class="icon-service bg-white"></div>
          </div>
        </div>

        <div>
          <h3>Serviço 1</h3>
          <p>Optimize manpower to benefit your business.</p>
        </div>
      </div>

    </div>

  </section>

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
