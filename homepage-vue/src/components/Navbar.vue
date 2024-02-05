<template>
  <div class="header row m-0">
    <div class="col col-lg-2 logo d-flex justify-content-start">
      <div class="d-flex">
        <div><img :src="icon" alt="icon" class="img-fluid" ></div>
        <div class="ms-2 d-flex flex-column align-self-center logo-text fs-6">
          <span>Apollo</span>
          <span class="text-purple text-capitalize">tech</span>
        </div>
      </div>
    </div>

    <nav class="d-none d-lg-flex col-lg-8 navbar justify-content-center">
      <ul class="nav">
        <li
          class="nav-item px-sm-0 nav-link nav-link-1 text-white hover-link"
          @click="scrollToElement('home')"
        >
          Home
        </li>
        <li
          class="nav-item nav-link nav-link-1 text-white hover-link"
          @click="scrollToElement('about')"
        >
          Sobre
        </li>
        <li
          class="nav-item nav-link nav-link-1 text-white hover-link"
          @click="scrollToElement('service')"
        >
          Serviços
        </li>
        <li
          class="nav-item nav-link nav-link-1 text-white hover-link"
          @click="scrollToElement('project')"
        >
          Projetos
        </li>
        <li
          class="nav-item nav-link nav-link-1 text-white hover-link"
          @click="scrollToElement('agency')"
        >
          Agência Qi3
        </li>
      </ul>
      <RouterView />
    </nav>

    <div class="d-flex col col-lg-2 justify-content-end">
      <button type="button" class="btn bg-purple text-white align-self-center">
        Marcar Reunião
      </button>
    </div>
  </div>
</template>

<script>
import icon from '@/components/icons/Icon55x55.png';

export default {
  data(){
    return{
      icon
    }
  },
  methods: {
    scrollToElement(elementID) {
      document.getElementById(elementID).scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>

<style scoped>

ul {
  list-style: none;
}

li{
  cursor: pointer;
}

.hover-link {
    position: relative;
    padding-bottom: 5px; /* Espaço para a linha de baixo */
    transition: color 0.3s, padding-bottom 0.3s;
}

.hover-link:hover {
    color: var(--white) !important; /* Cor do link ao passar o mouse */
}

@media (min-width: 992px) {
    /** LG **/
    .hover-link::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        height: 2px; /* Altura da linha */
        background-color: var(--white); /* Cor da linha */
        transition: width 0.3s;
    }

    .hover-link:hover {
        padding-bottom: 0; /* Remove o espaço para a linha de baixo */
    }

    .hover-link:hover::after {
        width: 100%; /* Expande a linha ao passar o mouse */
    }

}


.header {
  padding: 1rem;
  height: min-content;
  margin-bottom: 1rem;
}

.nav-link {
  position: relative;
  margin-left: 2rem;
}

.btn {
  background-color: var(--purple);
  padding: 10px;
  border-radius: 25px;
}

.btn:hover{
  border: 2px solid var(--purple);
}

</style>
