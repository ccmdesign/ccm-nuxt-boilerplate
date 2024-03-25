<template>
  <base-section>
    <center-l>
      <h1 class="text-align:right">
        <span class="color:accent">{{ typewriterWord }}</span>
        Design for <br/>
        <span class="color:accent">{{ typewriterWord2 }}</span>
        Research<br/>
      </h1>
    </center-l>
  </base-section>
</template>

<script setup>
import { ref, onMounted } from 'vue';


const words = [
  'Impactful',
  'Human-centred',
  'Data-driven',
  'Meaningful',
  'Innovative '
]

definePageMeta({
  layout: 'bare'
})


const typewriterWord = ref({
  'design': '',
  'research': ''
})
const typewriterWord2 = ref('')

const getRandomWord = (wordsList) => wordsList[Math.floor(Math.random() * wordsList.length)];

const typewriterEffect = async (getWord, animatedWord, typingDelay = 200) => {
  let letterIndex = 0
  let isDeleting = false
  let currentWord = ''

  while (true) {
    if (!currentWord) {
      currentWord = getWord();
    }

    if (isDeleting) {
      animatedWord.value = currentWord.substring(0, letterIndex--)
    } else {
      animatedWord.value = currentWord.substring(0, letterIndex++)
    }

    if (!isDeleting && letterIndex === currentWord.length + 1) {
      await new Promise(resolve => setTimeout(resolve, typingDelay * 60)) // Pause at the end of a word
      isDeleting = true
    } else if (isDeleting && letterIndex === 0) {
      isDeleting = false
      currentWord = '' // Clear the current word so a new random word can be selected
      await new Promise(resolve => setTimeout(resolve, typingDelay * 3))
    } else if (isDeleting) {
      await new Promise(resolve => setTimeout(resolve, typingDelay / 40)) // Control over the deleting speed
    }

    await new Promise(resolve => setTimeout(resolve, typingDelay))
  }
}

onMounted(() => {
  typewriterEffect(() => getRandomWord(words), typewriterWord, 50) // Adjust the speed as necessary
  typewriterEffect(() => getRandomWord(words), typewriterWord2, 50) // Adjust the speed as necessary
})


</script>

<style lang="scss" scoped>

</style>
