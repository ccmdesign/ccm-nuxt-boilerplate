<template>
  <base-section id="contact" size="l">
    <center-l size="wide">
      <stack-l>
        <h2>Contact</h2>
        <form action="">
          <stack-l>
            <base-field />
            <base-field />
            <base-textarea />
            <div class="text-align:right">
              <base-button label="Send" visual="primary" color="primary" icon-after="send" />
            </div>
            
          </stack-l>
        </form>
      </stack-l>
    </center-l>
  </base-section>
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
</script>

<style scoped lang="scss">

</style>
