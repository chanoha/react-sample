<template lang="pug">
  section.container
    div
      app-logo
      h1.title nuxt_project
      h2.subtitle about
      p {{text}}
      .links
        a.button--green(href="https://nuxtjs.org/") Documentation
        a.button--grey(href="https://github.com/nuxt/nuxt.js") GitHub
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    AppLogo
  },
  data: () => {
    return { text: 'Hello, World!' }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/variable.scss";
</style>

