<template>
  <footer
    id="footer"
    class="bg-purple d-flex row flex-column flex-md-row m-0"
  >
    <div class="col-12 col-md-3 row align-items-center">

      <div class="col-6 col-md-12 logo-footer d-flex">
        
        <div class="img-logo"></div>
        
        <div class="ms-2 d-flex flex-column align-self-center logo-text">
          <span class="text-white">Apollo</span>
          <span class="text-black text-capitalize">tech</span>
        </div>

      </div>

      <div class="col-6 col-md-12 redes-sociais text-white d-flex gap-4">
        <i class="fa-brands fa-facebook-f"></i>
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-linkedin"></i>
        <i class="fa-brands fa-twitter"></i>
      </div>
      
    </div>

    <div class="linha-footer col-12 col-md-1 bg-white my-4 my-md-0"></div>

    <div class="col-12 col-md-8 text-white d-flex flex-column gap-2 justify-content-center ms-3"
    >

      <div class="d-flex flex-column">
        <span class="title-footer font-secondary">E-mail</span>
        <span class="text-footer font-primary">Contato@contato.com</span>
      </div>

      <div class="d-flex flex-column">
        <span class="title-footer font-secondary">Endereço</span>
        <span class="text-footer font-primary"
          >123 Anywhere St., Any City, State, Country 12345</span
        >
      </div>

      <div class="d-flex flex-column">
        <span class="title-footer font-secondary">Contato</span>
        <span class="text-footer font-primary">(98) 99999-9999</span>
      </div>
    </div>

  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>

/* footer */

footer{
  width: 100%;
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

</style>
