<template>
  <base-section>
    <center-l size="wide">
      <div class="columns">
        <div class="column" fill-available="true">
          <stack-l>
            <h1>{{data.post.title}}</h1>
            <ccm-prose>
              <ContentRenderer :value="data.post">
                <ContentRendererMarkdown :value="data.post" />
              </ContentRenderer>
            </ccm-prose>
            <p><a href="https://file.notion.so/f/f/e07198ee-0287-49bb-a551-847009666233/dc818cff-c3aa-41bf-9080-3907e6ddc29e/Article_Page_Wireframe.pdf?id=1fbed197-8af6-4ad5-98a3-9279f043dbb9&table=block&spaceId=e07198ee-0287-49bb-a551-847009666233&expirationTimestamp=1706385600000&signature=aR1r2H7MHU5zP9uQmhQTkY_bDItneeYK9Jds1YZLkDE&downloadName=Article+Page+Wireframe.pdf" class="button">More information</a></p>
          </stack-l>
        </div>
        <div class="column">
          <stack-l class="ctas">
            <stack-l class="cta1">
              <h4>CTA Heading</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique nihil veniam earum.</p>
              <p><a href="https://file.notion.so/f/f/e07198ee-0287-49bb-a551-847009666233/dc818cff-c3aa-41bf-9080-3907e6ddc29e/Article_Page_Wireframe.pdf?id=1fbed197-8af6-4ad5-98a3-9279f043dbb9&table=block&spaceId=e07198ee-0287-49bb-a551-847009666233&expirationTimestamp=1706385600000&signature=aR1r2H7MHU5zP9uQmhQTkY_bDItneeYK9Jds1YZLkDE&downloadName=Article+Page+Wireframe.pdf" class="button">More information</a></p>
            </stack-l>
            <stack-l class="cta1">
              <h4>CTA Heading</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique nihil veniam earum.</p>
              <p><a href="https://file.notion.so/f/f/e07198ee-0287-49bb-a551-847009666233/dc818cff-c3aa-41bf-9080-3907e6ddc29e/Article_Page_Wireframe.pdf?id=1fbed197-8af6-4ad5-98a3-9279f043dbb9&table=block&spaceId=e07198ee-0287-49bb-a551-847009666233&expirationTimestamp=1706385600000&signature=aR1r2H7MHU5zP9uQmhQTkY_bDItneeYK9Jds1YZLkDE&downloadName=Article+Page+Wireframe.pdf" class="button">More information</a></p>
            </stack-l>
          </stack-l>
        </div>
      </div>
      <div class="instructions">
        <h3>Dev Info</h3>
        <cluster-l>
          <a href="https://www.newfangled.com/content-marketing-article-layout/" class="button" target="_blank">More Information</a>
          <a href="https://file.notion.so/f/f/e07198ee-0287-49bb-a551-847009666233/dc818cff-c3aa-41bf-9080-3907e6ddc29e/Article_Page_Wireframe.pdf?id=1fbed197-8af6-4ad5-98a3-9279f043dbb9&table=block&spaceId=e07198ee-0287-49bb-a551-847009666233&expirationTimestamp=1706400000000&signature=6rhXBogf_5HYgtPb56wHHiDSa41yBqi7qQyquLzXJYY&downloadName=Article+Page+Wireframe.pdf" target="_blank" class="button">More Information 2</a>
        </cluster-l>
      </div>
      
      
    </center-l>
  </base-section>
  
</template>

<script setup>
    const route = useRoute()

    const postData = await queryContent('articles').where({
        slug: route.params.slug
    }).findOne();

    const data = reactive({
        post: postData,
    });
</script>

<style lang="scss" scoped>

</style>
