<template>
  <base-section>
    <center-l size="wide">
      <h1>What We do</h1>
      <stack-l class="list">
        <ccm-service class="list__item" v-for="post in data.services" v-bind:key="post.slug" :content="post" />
      </stack-l>
      <div class="instructions">
        <h3>Dev Info</h3>
        <cluster-l>
          <a href="https://www.newfangled.com/capabilities-landing-page-layout/" class="button" target="_blank">More Information</a>
          <a href="https://file.notion.so/f/f/e07198ee-0287-49bb-a551-847009666233/8ba74af2-1ada-4d78-aae8-19b87950aef1/Capabilities_Landing_Page_Wireframe.pdf?id=9bd84f93-c303-461f-b4c0-3e9c6c50e777&table=block&spaceId=e07198ee-0287-49bb-a551-847009666233&expirationTimestamp=1706400000000&signature=7_Mz-xpqMBO0v_39VkoSAsnamP41tk3J2IIkBaxzQMM&downloadName=Capabilities+Landing+Page+Wireframe.pdf" target="_blank" class="button">More Information 2</a>
        </cluster-l>
      </div>
    </center-l>
  </base-section>
</template>

<script setup>
  // recuperar os dados do content. voce pode usar o querycontent
  // para filtrar os dados aqui.
  const services = await queryContent('services').find();

  // declaro uma variável reactive para interagir com o conteudo exibido em tempo real
  // alteracoes em variaveis reactive refletem no template diretamente
  const data = reactive({
      services: [],
  });

  // exemplo de tratamento de dados apenas exemplo:
  services.forEach(post => {
    const service = {
      title: post.title,
      description: post.description,
      slug: post.slug,
      url: `/services/${post.slug}`
    }
    data.services.push(service);
  });

</script>

<style lang="scss" scoped>

</style>
