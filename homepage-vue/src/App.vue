<script setup>
import ButtonMeeting from "./components/Button.vue";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <section id="home" class="bg-black text-white">
    <Navbar />

    <div class="content-home">
      <h1 class="text-uppercase text-center title-home">
        CRIANDO UM NOVO CONCEITO DE COMO APLICATIVOS
        <span class="text-purple">SÃO FEITOS</span>
      </h1>
      <h2 class="text-center caption-home">
        Potencialize sua presença online!
      </h2>
    </div>
  </section>

  <hr
    class="d-md-none w-50 m-4 bg-white opacity-100 my-5"
    style="height: 3px"
  />

  <section id="about" class="d-flex justify-content-between bg-black m-0 p-5">
    <div class="d-none d-md-block">
      <img src="http://via.placeholder.com/400x500" />
    </div>

    <div class="content-about">
      <div class="text-white mb-5 w-75">
        <h2 class="title-about">
          Nossa <span class="text-purple">História</span>
        </h2>
        <p class="text-about">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, amet?
          Nihil accusamus et architecto ad, corporis tenetur minima perferendis
          provident doloremque labore laborum mollitia ut eius inventore rem
          vero eos veritatis. Repudiandae, sed dolor? Ex ipsum amet assumenda
          nulla veniam accusantium doloremque mollitia omnis rerum dolores qui,
          doloribus dignissimos? Vitae fugit pariatur culpa autem quasi aut
          itaque fuga molestias vero! Voluptatem quia dolorem at quam aut,
          ducimus error consequatur corrupti fugit rem sequi recusandae deleniti
          assumenda, ea deserunt quod dolores vitae id aliquid sunt pariatur
          saepe dolorum. Nisi mollitia expedita laboriosam exercitationem ab
          unde vero. Eius in distinctio expedita iusto?
          <br/><br/><br/>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam fugit asperiores fuga porro velit neque expedita, doloribus quasi numquam fugiat?
        </p>
      </div>
    </div>
  </section>

  <section id="service" class="bg-black">
    <div class="content-service text-white text-center">
      <h2 class="title-section mt-5">
        Nossos <span class="text-purple">Serviços</span>
      </h2>
      <p class="text-service">
        Destaque-se na web com nossos serviços exclusivos.
      </p>
    </div>

    <div class="group-services text-white text-center row">
      <div class="service col-12 col-md-4">
        <div class="d-flex justify-content-center my-4">
          <div
            class="bg-icon bg-white d-flex justify-content-center align-items-center"
          >
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
          <div
            class="bg-icon bg-white d-flex justify-content-center align-items-center"
          >
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
          <div
            class="bg-icon bg-white d-flex justify-content-center align-items-center"
          >
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

  <section id="project" class="bg-white p-3">
    <div class="content-project text-center">
      <h2 class="title-section text-black">
        Nossos <span class="text-purple">Projetos</span>
      </h2>
      <p class="text-project text-black">
        Explore nossa galeria de realizações.
      </p>
    </div>

    <div
      class="gruop-projects row justify-content-between flex-column flex-md-row align-content-center"
    >
      <div class="project col-12 col-md-4">
        <div class="bg-img-project" id="img-project-1"></div>
        <div class="text-black">
          <h3 class="font-primary fw-bold text-uppercase">
            desenvolvimento Customizado
          </h3>
          <p class="font-secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam iure
            eum ea dolorem repudiandae. Culpa eveniet optio ab maxime officia.
          </p>
        </div>
      </div>

      <div class="project col-12 col-md-4">
        <div class="bg-img-project" id="img-project-2"></div>
        <div class="text-black">
          <h3 class="font-primary fw-bold text-uppercase">
            práticas SEO avançadas
          </h3>
          <p class="font-secondary">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam,
            tenetur modi consectetur voluptate temporibus sequi illum nihil
            aspernatur nemo fuga?
          </p>
        </div>
      </div>

      <div class="project col-12 col-md-4">
        <div class="bg-img-project" id="img-project-3"></div>
        <div class="text-black">
          <h3 class="font-primary fw-bold text-uppercase">Design Responsivo</h3>
          <p class="font-secondary">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel ad,
            libero dignissimos ut consectetur unde rem voluptate minima suscipit
            modi?
          </p>
        </div>
      </div>
    </div>
  </section>

  <Footer />
  <ButtonMeeting />
</template>

<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>

<style scoped>
.title-section {
  font-size: 2rem;
  margin-bottom: 1rem;
}

/* home */

.content-home {
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 2rem;
}

.caption-home {
  font-size: 1rem;
}

/* about */

#img-about {
  background: url(http://lorempixel.com.br/500/500) no-repeat;
  background-position: center center;
  background-size: cover;
}

.content-about {
  padding: 2rem;
}

.text-about {
  font-size: 0.95rem;
  font-family: var(--font-secondary);
  text-align: left;
}

/* serviços */

#service {
  padding: 1rem 2rem;
  background-color: var(--black);
}

.service {
  padding: 1.5rem 0;
}

.bg-icon {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  box-shadow: 0px 0px 20px 20px #3f3f3f;
}

#icon-service-1 {
  background: url(/public/img/inteligencia-artificial.png) no-repeat;
}

#icon-service-2 {
  background: url(/public/img/medalha.png) no-repeat;
}

#icon-service-3 {
  background: url(/public/img/trofeu.png) no-repeat;
}

.icon-service {
  background-size: 100% 100% !important;
  background-position: center center !important;
  width: 80px;
  height: 80px;
}

/* projects */

#project {
  padding: 3rem 2rem;
}

.content-project {
  margin-bottom: 2rem;
}

.text-project {
  font-size: 1rem;
}

.gruop-projects {
  max-width: 1200px;
}

.project {
  max-width: 370px;
  margin-bottom: 2rem;
}

#img-project-1 {
  background: url("/public/img/servico-1.jpg") no-repeat;
}

#img-project-2 {
  background: url("/public/img/servico-2.jpg") no-repeat;
}

#img-project-3 {
  background: url("/public/img/pexels-photomix-company-230544.jpg") no-repeat;
}

.bg-img-project {
  width: 100%;
  height: 200px;
  background-size: cover !important;
  background-position: center center !important;
  border: 2px solid var(--purple);
  margin-bottom: 1.8rem;
}
</style>
