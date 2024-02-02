<template>
  <div class="header row m-0">
    <div class="col-md-2 logo d-flex justify-content-start">
      <div class="d-flex">
        <div id="img-logo"></div>
        <div class="ms-2 d-flex flex-column align-self-center logo-text">
          <span>Apollo</span>
          <span class="text-purple text-capitalize">tech</span>
        </div>
      </div>
    </div>

    <nav class="d-none d-md-flex col-md-8 navbar justify-content-center">
      <ul class="nav">
        <li
          class="nav-item nav-link nav-link-1 text-white"
          @click="scrollToElement('home')"
        >
          Home
        </li>
        <li
          class="nav-item nav-link nav-link-1 text-white"
          @click="scrollToElement('about')"
        >
          Sobre
        </li>
        <li
          class="nav-item nav-link nav-link-1 text-white"
          @click="scrollToElement('service')"
        >
          Serviços
        </li>
        <li
          class="nav-item nav-link nav-link-1 text-white"
          @click="scrollToElement('project')"
        >
          Projetos
        </li>
        <li
          class="nav-item nav-link nav-link-1 text-white"
          @click="scrollToElement('agency')"
        >
          Agência Qi3
        </li>
      </ul>
      <RouterView />
    </nav>

    <div class="d-none d-sm-flex col-md-2 justify-content-end">
      <button type="button" class="btn bg-purple text-white align-self-center">
        Marca uma reunião
      </button>
    </div>
  </div>
</template>

<script>
export default {
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

a {
  color: inherit;
  text-decoration: none;
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

.nav-link::before {
  content: "";
  position: absolute;
  background-color: white;
  width: 100%;
  height: 2px;
  top: 100%;
  left: 0;
}
</style>
