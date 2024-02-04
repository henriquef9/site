<template>
  <footer
    id="footer"
    class="bg-purple row d-flex flex-column flex-md-row justify-content-md-center m-0"
  >
    <div class="col-12 col-md-3 d-flex flex-md-column justify-content-md-around align-items-center">

      <div class="col-6 col-md-12 logo-footer d-flex">
        
        <img :src="icon" alt="icon">
        
        <div class="ms-2 d-flex flex-column align-self-center logo-text">
          <span class="text-white">Apollo</span>
          <span class="text-black text-capitalize">tech</span>
        </div>

      </div>

      <div class="col-6 col-md-12 redes-sociais text-white d-flex gap-4">
        <i @click="abrirFacebook()" class="fa-brands fa-facebook-f cursor-pointer"></i>
        <i @click="abrirInstagram()" class="fa-brands fa-instagram cursor-pointer"></i>
        <i class="fa-brands fa-linkedin cursor-pointer"></i>
        <i class="fa-brands fa-twitter cursor-pointer"></i>
      </div>
      
    </div>

    <div class="linha-footer col-12 col-md-1 bg-white my-4 my-md-0"></div>

    <div class="col-12 col-md-8 text-white d-flex flex-column gap-2 justify-content-center ms-md-3"
    >

      <div class="d-flex flex-column">
        <span class="title-footer font-secondary">E-mail</span>
        <span class="text-footer font-primary">contato@agencypollotech.com.br</span>
      </div>

      <div class="d-flex flex-column">
        <span class="title-footer font-secondary">Contato</span>
        <span class="text-footer font-primary">(98) 8884-2365</span>
      </div>
    </div>

  </footer>
</template>

<script>

import icon from '@/components/icons/Icon95x95.png';

export default {
  name: "Footer",
  data(){
    return{
      icon,
    }
  },
  methods:{
    abrirFacebook(){
      window.open("https://www.facebook.com/profile.php?id=61556083589840", "_blank");
    },
    abrirInstagram(){
      window.open("https://www.instagram.com/agencypollotech/", "_blank");
    }
  }
};
</script>

<style scoped>

/* footer */

footer{
  width: 100%;
  padding: 2rem 1rem;
}

.cursor-pointer{
  cursor: pointer;
}

.img-logo {
    width: 50px;
    height: 50px;
    background: url(/public/img/full-screen.png) no-repeat;
    background-size: cover !important;
    background-position: center center !important;
}

.logo-footer .img-logo {
  background: url(/public/img/fullscreen.png);
}


.linha-footer {
  position: relative;
  width: 100%;
  height: 2px;
  padding: 0 !important;

}

.linha-footer::after {
  position: absolute;
  content: "";
  background-color: var(--white);
  width: 10px;
  height: 10px;
  border-radius: 50%;
  top: -3.5px;
  left: 0px;
}

.linha-footer::before {
  position: absolute;
  content: "";
  background-color: var(--white);
  width: 10px;
  height: 10px;
  border-radius: 50%;
  top: -3.5px;
  right: 0px;
}

@media (min-width: 768px){


.redes-sociais {
  font-size: 1.85rem;
}


.linha-footer {
  width: 2px !important;
  height: auto;
  padding-left: 0;
  padding-right: 0;
}

.linha-footer::after {
  position: absolute;
  content: "";
  background-color: var(--white);
  width: 10px;
  height: 10px;
  border-radius: 50%;
  top: -3.5px;
  left: -3.5px;
}

.linha-footer::before {
  position: absolute;
  content: "";
  background-color: var(--white);
  width: 10px;
  height: 10px;
  border-radius: 50%;
  top: 100%;
  right: -4px;
}

}

</style>
