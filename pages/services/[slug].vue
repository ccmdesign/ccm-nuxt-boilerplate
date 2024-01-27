<template>
  <base-section id="what-we-do" size="l">
    <center-l size="wide">
      <stack-l>
        <!-- <h2>{{data.post.title}}</h2> -->
        <h2>Service</h2>
        <ContentRenderer :value="data.post">
          <ContentRendererMarkdown :value="data.post" />
        </ContentRenderer>

        
        <h4>250-500 Words</h4>
        <p>This page should explain the goals, process, and outcomes of your service.</p>

      </stack-l>
    </center-l>
  </base-section>

  <base-section id="testimonial" size="l">
    <center-l size="wide">
      <ccm-testimonial class="list__item" v-for="testimonial in data.testimonials" v-bind:key="testimonial.slug" :content="testimonial" />
    </center-l>
  </base-section>

  <base-section id="case-studies" size="l">
    <center-l size="wide">
      <stack-l>
        <h2>Related Case Studies</h2>
        <p>This list represents the primary action a prospect should take next: to learn more detail about your services/disciplines on separate pages. It should be easily scannable.</p>
      </stack-l>
    </center-l>
  </base-section>
  
  <base-section id="cta" size="l">
    <center-l size="wide">
      <ccm-cta :content="ctaContent"/>
    </center-l>
  </base-section> 

  <center-l>
    <div class="instructions">
        <h3>Dev Info</h3>
        <cluster-l>
          <a href="https://www.newfangled.com/service-landing-page-layout/" class="button" target="_blank">More Information</a>
          <a href="https://file.notion.so/f/f/e07198ee-0287-49bb-a551-847009666233/d1ceb0e7-df1b-445b-9930-aea71e7bda20/Service_Landing_Page_Wireframe.pdf?id=85fa43fc-d0ed-45d4-9c0e-4a8685895dd1&table=block&spaceId=e07198ee-0287-49bb-a551-847009666233&expirationTimestamp=1706400000000&signature=vLI4DClE1ByOODowffHPKDnP8VFvuEd7av2N3XIpwI0&downloadName=Service+Landing+Page+Wireframe.pdf" target="_blank" class="button">More Information 2</a>
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

const postData = await queryContent('services').where({
    slug: route.params.slug
}).findOne();

const data = reactive({
    post: postData,
    testimonials: [],
});

const testimonials = await queryContent('testimonial').find();

testimonials.forEach(post => {
  const testimonial = {
    title: post.title,
    description: post.description,
    slug: post.slug,
    url: `/case-studies/${post.slug}`
  }
  data.testimonials.push(testimonial);
});

const ctaContent = {
  title: 'CTA Heading',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique nihil veniam earum.',
  slug: 'cta-heading',
  url: '/contact',
  label: 'Contact Us'
}


</script>

<style scoped lang="scss">

</style>
