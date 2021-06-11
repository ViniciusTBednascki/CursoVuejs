<template>
  <v-app>
    <navigation-drawer />

    <page-article />

    <page-footer />
  </v-app>
</template>

<script>
import navigationDrawer from './navigation/navigationDrawer.vue'
import article from './article/article.vue'
import footer from './footer.vue'

export default {
  components: {
    'navigation-drawer': navigationDrawer,
    'page-article': article,
    'page-footer': footer
  }
}
</script>
