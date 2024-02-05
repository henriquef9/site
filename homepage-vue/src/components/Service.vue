<template>
  <section id="service" class="bg-black">
    <div class="content-service text-white text-center">
      <h2 class="title-service mt-5">
        Nossos <span class="text-purple">Serviços</span>
      </h2>
      <p class="caption-service">
        Destaque-se na web com nossos serviços exclusivos.
      </p>
    </div>

    <div class="group-services text-white text-center
             row row-cols-1 row-cols-md-2 row-cols-lg-3"
    >
      <div v-for="(title, index) in titles" :key="index" class="service col">
        <div class="d-flex justify-content-center my-4">
          <div
            class="bg-icon bg-white d-flex justify-content-center align-items-center"
          >
            <div id="" class="icon-service bg-white" :style="{ backgroundImage:  `url(public/img/${images[index]})` }"></div>
          </div>
        </div>

        <div>
          <h3>{{ title }}</h3>
          <p> {{ descriptions[index] }} </p>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      titles: [
        "Desenvolvimento de Aplicações Web",
        "Desenvolvimento de Portais",
        "UX/UI",
        "Manutenção e Suporte Técnico",
        "Consultoria em Tecnologia",
        "Desenvolvimento de Conteúdo e SEO",
      ],
      descriptions: [
        "Construção de aplicações web personalizadas para atender às necessidades específicas dos clientes, como sistemas de gerenciamento, CRM (Customer Relationship Management), e-commerce, entre outros.",
        "Criação de portais online para comunidades, intranets corporativas, portais de notícias, entre outros.",
        "Implementação de design responsivo para garantir uma experiência de usuário consistente em dispositivos desktop, tablets e smartphones.",
        "Oferta de serviços de manutenção contínua, atualizações de segurança e suporte técnico para garantir o bom funcionamento dos sites e aplicações desenvolvidos.",
        "Oferta de consultoria para ajudar os clientes a escolherem as melhores tecnologias, plataformas e estratégias para atingir seus objetivos.",
        "Produção de conteúdo relevante e otimizado para mecanismos de busca (SEO) para melhorar a visibilidade online dos clientes",
      ],
      images: [
        "designer-de-web.png",
        "local-na-rede-internet.png",
        "design-ux.png",
        "apoio-suporte.png",
        "servico.png",
        "seo.png"
      ]
    };
  },
};
</script>

<style scoped>
#service {
  padding: 1rem 2rem;
  background-color: var(--black);
}

.service {
  padding: 1.8rem;
}

.bg-icon {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  box-shadow: 0px 0px 20px 20px #3f3f3f;
}

.icon-service {
  background-size: 100% 100% !important;
  background-position: center center !important;
  width: 80px;
  height: 80px;
}

</style>
