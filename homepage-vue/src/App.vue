<script setup>
import ButtonMeeting from "@/components/Button.vue";
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import Service from "@/components/Service.vue";
</script>

<template>
  <section id="home" class="bg-black text-white">
    <Navbar />

    <div class="content-home">
      <div
        class="animation-words"
        data-words='["Profissionais","Modernos","Personalizados","Inovadores"]'
      >
        <h1 class="text-uppercase text-center title-home">
          Crie sites
          <span class="word d-block d-sm-inline-block text-purple"></span>
        </h1>
      </div>
      <h2 class="text-center caption-home">
        Potencialize sua presença online!
      </h2>
    </div>
  </section>

  <section id="about" class="d-flex justify-content-between bg-black m-0 p-md-5">
    <div class="d-none d-md-block">
      <img src="http://via.placeholder.com/400x500" />
    </div>

    <div class="content-about">
      <div class="text-white mb-5 w-md-75">
        <h2 class="title-about">
          Nossa <span class="text-purple">História</span>
        </h2>
        <p class="text-about">
          Bem-vindo à Pollo Tech, uma equipe apaixonada e comprometida com o
          desenvolvimento de soluções digitais. Somos impulsionados pela
          inovação, pela qualidade e pelo compromisso em transformar suas ideias
          em realidade, proporcionando experiências digitais memoráveis.
        </p>
        <p class="text-about">
          A diversidade é parte integrante de nossa força., acreditamos que uma
          equipe diversificada é fundamental para a criatividade e a inovação,
          impulsionando-nos a superar desafios de maneiras únicas e
          surpreendentes.. Somos uma equipe é composta por:
        </p>
        <p class="text-about">
          Junte-se a nós na Pollo Tech, onde cada projeto é uma jornada
          emocionante, e cada desafio é uma oportunidade de criar algo
          extraordinário.
        </p>
      </div>
    </div>
  </section>

  <Service />

  <section
    id="project"
    class="d-flex flex-column justify-content-center align-items-center bg-white mt-5 p-3"
  >
    <div class="mb-2 text-center">
      <h2 class="title-project text-black">
        Nossos <span class="text-purple">Projetos</span>
      </h2>
      <p class="caption-project text-black">
        Explore nossa galeria de realizações.
      </p>
    </div>

    <div
      class="gruop-projects row justify-content-around flex-column flex-md-row align-content-center"
    >
      <div class="project col-12 col-md-4">
        <img class="bg-img-project" src="http://via.placeholder.com/342x196" />
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
        <img class="bg-img-project" src="http://via.placeholder.com/342x196" />
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
        <img class="bg-img-project" src="http://via.placeholder.com/342x196" />
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
import $ from "jquery";

export default {
  mounted() {
    $(".animation-words").each(function () {
      const animationContainer = $(this);
      const wordElement = animationContainer.find(".word");
      const wordsArray = animationContainer.data("words");

      let currentWordIndex = 0;
      let currentLetterIndex = 0;

      function animateWords() {
        if (currentLetterIndex === wordsArray[currentWordIndex].length) {
          currentWordIndex = (currentWordIndex + 1) % wordsArray.length;
          currentLetterIndex = 0;
          wordElement.text("");
        }

        const currentWord = wordsArray[currentWordIndex];
        const currentLetter = currentWord[currentLetterIndex];

        wordElement.text(wordElement.text() + currentLetter);
        currentLetterIndex++;

        setTimeout(
          animateWords,
          currentLetterIndex === wordsArray[currentWordIndex].length
            ? 1000
            : 250
        ); // Tempo entre as letras (em milissegundos)
      }

      animateWords();
    });
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

/* about */

#img-about {
  background: url(http://lorempixel.com.br/500/500) no-repeat;
  background-position: center center;
  background-size: cover;
}

.content-about {
  padding: 2rem;
}

/* projects */

#project {
  padding: 3rem 2rem;
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
  background-size: cover;
  background-position: center center;
  border: 2px solid var(--purple);
  margin-bottom: 1.8rem;
}


</style>
