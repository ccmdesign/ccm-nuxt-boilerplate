<template>
  <base-section>
    <center-l size="wide">
      <div class="columns">
        <!-- <div class="column">
          <stack-l class="filters">
            <h3>Filters</h3>
            <div>Category</div>
            <div>Category</div>
            <div>Category</div>
            <div>Category</div>
            <div>Category</div>
            <div>Category</div>
          </stack-l>
        </div> -->
        <div class="column" fill-available="true">
          <h1>Insights</h1>
          <stack-l>
            <ccm-insight class="list__item" v-for="post in data.articles" v-bind:key="post.slug" :content="post" />
          </stack-l>
        </div>
        <div class="column">
          <stack-l class="ctas">
            <ccm-cta 
              title="CTA Heading 1"
              description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique nihil veniam earum."
              label="Learn More"
              url="#"
            />
            <ccm-cta 
              title="CTA Heading 2"
              description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique nihil veniam earum."
              label="Buy"
              url="#"
            />
          </stack-l>
        </div>
      </div>
      <div class="instructions">
        <h3>Dev Info</h3>
        <cluster-l>
          <a href="https://www.newfangled.com/content-marketing-hub-layout/" class="button" target="_blank">More Information</a>
          <a href="https://file.notion.so/f/f/e07198ee-0287-49bb-a551-847009666233/25b19d1d-26af-4332-b1b2-00ff017227c1/Newfangled_Content_Hub_Wireframe.pdf?id=3b0904f6-0a86-4c33-8ae4-dff379aaffed&table=block&spaceId=e07198ee-0287-49bb-a551-847009666233&expirationTimestamp=1706400000000&signature=NFb23aRVCc5vIAki86ZM_xZzmdsqXCBIxxapO1pe1r0&downloadName=Newfangled+Content+Hub+Wireframe.pdf" target="_blank" class="button">More Information 2</a>
          <base-button el="a" href="https://file.notion.so/f/f/e07198ee-0287-49bb-a551-847009666233/25b19d1d-26af-4332-b1b2-00ff017227c1/Newfangled_Content_Hub_Wireframe.pdf?id=3b0904f6-0a86-4c33-8ae4-dff379aaffed&table=block&spaceId=e07198ee-0287-49bb-a551-847009666233&expirationTimestamp=1706378400000&signature=_tTatR9EMyDPpMLK9RAQMciqJDirlSiCJ8lYbrqJOo8&downloadName=Newfangled+Content+Hub+Wireframe.pdf" target="_blank">Learn More</base-button>
        </cluster-l>
      </div>
    </center-l>
  </base-section>
</template>

<script setup>
  // recuperar os dados do content. voce pode usar o querycontent
  // para filtrar os dados aqui.
  const articles = await queryContent('articles').find();

  // declaro uma variável reactive para interagir com o conteudo exibido em tempo real
  // alteracoes em variaveis reactive refletem no template diretamente
  const data = reactive({
      articles: [],
  });

  // exemplo de tratamento de dados apenas exemplo:
  articles.forEach(post => {
    const article = {
      title: post.title,
      description: post.description,
      slug: post.slug,
      url: `/insights/${post.slug}`
    }
    data.articles.push(article);
  });

</script>

<style lang="scss" scoped>
.ctas { min-width: 220px; }
.filters { min-width: 120px; }



</style>
