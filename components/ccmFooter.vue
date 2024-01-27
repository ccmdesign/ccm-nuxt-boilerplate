<template>
  <base-section class="footer">
    <center-l size="wide">
      <div class="columns">
        <div class="column">
          <h3>Navigation</h3>
          <ul class="footer-menu">
            <li v-for="item in menu" :key="item.id">
              <nuxt-link class="footer-menu__item" :to="item.url">{{ item.label }}</nuxt-link>
            </li>
          </ul>
        </div>
        
        <div class="column" fill-available="true">
          <stack-l>
            <h3>About</h3>
            <p>{{ projectConfig.aboutFooter }}</p>
          </stack-l>
        </div>
        
        <div class="column" fill-available="true">
          <stack-l>
            <h3>Stay in touch</h3>
            <stack-l>
              <control-group>
                <base-input placeholder="Your Email" />
                <base-button size="l">Sign up</base-button>
              </control-group>
              
              <base-button size="l">Contact</base-button>
            </stack-l>
          </stack-l>
        </div>
      </div>
    </center-l>
    <div class="by-ccm">
      <span>{{ currentYear }} ® Copyright {{ projectConfig.client }}<span class="desktop-only"> | Licensed under <a :href="projectConfig.license_url">{{ projectConfig.license_name }}</a></span></span>
      <a href="https://www.ccmdesign.ca" target="_blank">by ccm.design</a>
    </div>
    
  </base-section>
  
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { menu } from '~/composables/navigation.js'
import PROJECTCONFIG from '~/project_config.json'


const currentYear = ref('')
const projectConfig = PROJECTCONFIG;

onMounted(() => {
  currentYear.value = new Date().getFullYear()
})
</script>

<style lang="scss" scoped>

.footer {
  border-top: 1px solid var(--base-color-10);
  --base-section-color: var(--base-color);
  --base-section-background: var(--white-color); 
}

.footer-menu {
  li { list-style: none; }
}

.footer-menu__item {
  color: var(--base-color);
  text-decoration: none;
  letter-spacing: 0;
  transition: all 0.2s ease-in-out;

  &:hover {
    letter-spacing: .5px;
    transition: all 0.2s ease-in-out;
  }
}


.by-ccm {
  position: absolute;
  bottom: 0;
  width: 100%;
  font-size: 0.75rem;
  color: hsla(var(--base-hsl), 0.5);
  padding: var(--s0) var(--s1);
  display: flex;
  justify-content: space-between;
  font-family: sans-serif;
  letter-spacing: .3px;
}

.by-ccm a { color: hsla(var(--base-hsl), 0.5); }
</style>
