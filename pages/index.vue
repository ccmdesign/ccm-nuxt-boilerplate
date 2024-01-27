<template>
  <base-section id="services" size="l">
    <center-l size="wide">
      <stack-l>
        <h1>We design digital products for research institutions</h1>
        <p visual="h4">Since 2009 we help universities, think tanks, NGOs, international organizations and governments to better showcase the knowledge they produce. From from research findings report to large document repositories, from research websites to design systems.</p>
        <div>
          <base-button visual="primary" color="accent" size="l" el="nuxtLink" to="/what-we-do">Learn More</base-button>
        </div>
      </stack-l>
      <div class="instructions">
        <h3>Dev Info</h3>
        <p>Your positioning should be articulated clearly in a brief ~8-10 word statement accompanied by a button to learn more on your capabilities landing page. This button represents the primary action a prospect should take on this page.</p>
      </div>
    </center-l>
  </base-section>


  <base-section id="portfolio" size="l">
    <center-l size="wide">
      <stack-l>
        <h2>What we have done | Portfolio</h2>
        <ccm-case-study class="list__item" v-for="caseStudy in data.caseStudies" v-bind:key="caseStudy.slug" :content="caseStudy" />
        <div class="instructions">
          <h3>Dev Info</h3>
          <p>You should feature case studies of your best work next, proving the applied value of your expertise.</p>
        </div>  
      </stack-l>
    </center-l>
  </base-section>

  <base-section id="testimonials" size="l">
    <center-l size="wide">
      <stack-l>
        <h2>What our clients say | Testimonials</h2>
        <ccm-testimonial class="list__item" v-for="testimonial in data.testimonials" v-bind:key="testimonial.slug" :content="testimonial" />
        
        <div class="instructions">
          <h3>Dev Info</h3>
          <p>A happy client is always a better salesperson for you than you can be for yourself. Let them provide the social proof your prospects need.</p>
        </div>

      </stack-l>
    </center-l>
  </base-section>

  <base-section id="insights" size="l">
    <center-l size="wide">
      <stack-l>
        <h2>What we say | Insights</h2>
        <stack-l>
          <ccm-insight class="list__item" v-for="article in data.articles" v-bind:key="article.slug" :content="article" />
          
          <div class="instructions">
            <h3>Dev Info</h3>
            <p>Finally, here is where you can feature the material that probably changes most frequently — your marketing content.</p>
          </div>

        </stack-l>
      </stack-l>
    </center-l>
  </base-section>

  
</template>

<script setup>
  const data = reactive({
      articles: [],
      services: [],
      caseStudies: [],
      testimonials: [],
  });

  const articles = await queryContent('articles').find();

  articles.forEach(post => {
    const article = {
      title: post.title,
      description: post.description,
      slug: post.slug,
      url: `/insights/${post.slug}`
    }
    data.articles.push(article);
  });

  const services = await queryContent('services').find();

  services.forEach(post => {
    const service = {
      title: post.title,
      description: post.description,
      slug: post.slug,
      url: `/services/${post.slug}`
    }
    data.services.push(service);
  });

  const caseStudies = await queryContent('case-studies').find();

  caseStudies.forEach(post => {
    const caseStudy = {
      title: post.title,
      description: post.description,
      slug: post.slug,
      url: `/case-studies/${post.slug}`
    }
    data.caseStudies.push(caseStudy);
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

</script>

<style scoped lang="scss">

</style>
