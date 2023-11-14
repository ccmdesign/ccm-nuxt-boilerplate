<template>
  <div>
    <h1>test</h1>
    <div class="list">
      <ul class="list__item" v-for="post in data.articles" v-bind:key="post.slug">
        <li><nuxt-link :to="post.url">{{ post.title }}</nuxt-link></li>
      </ul>
    </div>
    <!-- EU PARTICULARMENTE NAO USO ESSA LISTAGEM PQ NA MAIORIA DAS VEZES 
         É PRECISO TRATAR OS DADOS ANTES DE EXIBIR
    <content-list path="/articles" v-slot="{ list }">
      <div v-for="article in list" :key="article._path">
        <h2>{{ article.title }}</h2>
        <p>{{ article.description }}</p>
        <p><nuxt-link :to="article._path">Go to article</nuxt-link></p>
        <pre>
          {{ article }}
        </pre>
      </div>
    </content-list>-->
  </div>
</template>

<script setup>
  // RECUPERAR OS DADOS DO CONTENT. VOCE PODE USAR O QUERYCONTENT
  // PARA FILTRAR OS DADOS AQUI.
  const articles = await queryContent('articles').find();

  // DECLARO UMA VARIÁVEL REACTIVE PARA INTERAGIR COM O CONTEUDO EXIBIDO EM TEMPO REAL
  // ALTERACOES EM VARIAVEIS REACTIVE REFLETEM NO TEMPLATE DIRETAMENTE
  const data = reactive({
      articles: [],
  });

  // EXEMPLO DE TRATAMENTO DE DADOS APENAS EXEMPLO:
  articles.forEach(post => {
    const article = {
      title: post.title,
      description: post.description,
      slug: post.slug,
      url: `/articles/${post.slug}`
    }
    data.articles.push(article);
  });

</script>

<style lang="scss" scoped>

</style>
