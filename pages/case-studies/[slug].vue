<template>
  <base-section id="case-study-proof">
    <center-l size="wide">
      <stack-l>
        <h2>{{ data.post.title }}</h2>
        <ccm-prose>
          <ContentRenderer :value="data.post">
            <ContentRendererMarkdown :value="data.post" />
          </ContentRenderer>
        </ccm-prose>
        <div class="instructions">
          <h3>Dev Info</h3>
          <h4>Proof</h4>
          <p>Prospects need proof of results (quantitative or qualitative), proof of fit, and proof of quality. Representing how you measure success is critical, as is providing testimonials and samples of what you produce.</p>
        </div>
      </stack-l>
    </center-l>
  </base-section>

  <base-section id="case-study-structure">
    <center-l size="wide">
      <stack-l>
        <h2>Structure</h2>
        <div class="instructions">
          <h3>Dev Info</h3>
          <h4>Structure</h4>
          <p>Always connect results back to the service(s) which made them possible. For first-time visitors to your site, these will represent the primary action they should take after reading this content.</p>
        </div>
      </stack-l>
    </center-l>
  </base-section>
  
  <base-section id="contact">
    <center-l size="wide">
      <stack-l>
        <h2>A Way to Engage</h2>
        <div class="instructions">
          <h3>Dev Info</h3>
          <h4>A Way to Engage</h4>
          <p>Once a prospect has read about what you do and how you’ve put it to use, the most valuable action they can take next is to get in touch with you to discuss working together.</p>
        </div>
      </stack-l>
    </center-l>
  </base-section>
  <center-l size="wide">
    <div class="instructions">
      <h3>Dev Info</h3>
      <cluster-l>
        <a href="https://www.newfangled.com/how-to-write-a-case-study/" class="button" target="_blank">More Information</a>
        <a href="https://www.newfangled.com/case-study-layout/" target="_blank" class="button">More Information 2</a>
        <a href="https://file.notion.so/f/f/e07198ee-0287-49bb-a551-847009666233/ee1b750e-7f92-47f4-9a65-5b35acddda54/NF_Extra_Case-Study-Wireframe_Updated_03-22-2022.pdf?id=f4329062-12ba-4cf0-aa20-8ea91ea423ae&table=block&spaceId=e07198ee-0287-49bb-a551-847009666233&expirationTimestamp=1706400000000&signature=gqMIr7cAlpvwah7GmhLaes7QqRoBHNrGfI8I0W4VVAk&downloadName=NF_Extra_Case-Study-Wireframe_Updated_03-22-2022.pdf" target="_blank" class="button">More Information 3</a>
        <base-button visual="secondary" color="base" el="a" href="https://www.newfangled.com/wp-content/uploads/2022/03/NF_Extra_Case-Study-Wireframe_Updated_03-22-2022.pdf">PDF</base-button>
      </cluster-l>
    </div>
  </center-l>
</template>

<script setup>

// Use this if you want to overwrite the default head tags, mainly the OpenGraph tags.

// import { useHead } from '@nuxtjs/composition-api'

// useHead(() => ({
//   title: 'Page Title',
//   meta: [
//     { hid: 'og:title', property: 'og:title', content: 'Page Title' },
//     { hid: 'og:description', property: 'og:description', content: 'Page Description' },
//     { hid: 'og:image', property: 'og:image', content: 'https://example.com/page-image.jpg' },
//     { hid: 'og:url', property: 'og:url', content: 'https://example.com/page-url' },
//     // other Open Graph tags...
//   ],
// }))
const route = useRoute()

const postData = await queryContent('case-studies').where({
    slug: route.params.slug
}).findOne();

const data = reactive({
    post: postData,
});
</script>

<style scoped lang="scss">

</style>
