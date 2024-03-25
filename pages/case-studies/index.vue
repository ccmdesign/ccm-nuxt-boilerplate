<template>
  <base-section>
    <center-l size="wide">
      <h1>Case Studies</h1>
      <stack-l class="list">
        <ccm-case-study class="list__item" v-for="post in data.caseStudies" v-bind:key="post.slug" :content="post" />
      </stack-l>
      <div class="instructions">
        <h3>Dev Info</h3>
        <cluster-l>
          <a href="https://www.newfangled.com/how-to-write-a-case-study/" class="button" target="_blank">More Information</a>
          <a href="https://www.newfangled.com/case-study-layout/" target="_blank" class="button">More Information 2</a>
        </cluster-l>
      </div>
    </center-l>
  </base-section>
</template>

<script setup>
  // recuperar os dados do content. voce pode usar o querycontent
  // para filtrar os dados aqui.
  const caseStudies = await queryContent('case-studies').find();

  // declaro uma variável reactive para interagir com o conteudo exibido em tempo real
  // alteracoes em variaveis reactive refletem no template diretamente
  const data = reactive({
      caseStudies: [],
  });

  // exemplo de tratamento de dados apenas exemplo:
  caseStudies.forEach(post => {
    const caseStudy = {
      title: post.title,
      description: post.description,
      slug: post.slug,
      url: `/case-studies/${post.slug}`
    }
    data.caseStudies.push(caseStudy);
  });

</script>

<style lang="scss" scoped>

</style>
