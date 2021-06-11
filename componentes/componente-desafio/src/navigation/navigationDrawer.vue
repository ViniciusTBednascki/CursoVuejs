<template>
    <v-navigation-drawer app>
      <navigation-toolbar />

      <v-divider></v-divider>

      <navigation-list />
    </v-navigation-drawer>
</template>

<script>
import navigationToolbar from './navigationToolbar.vue'
import navigationList from './navigationList.vue'
export default {
  components: {
    'navigation-toolbar': navigationToolbar,
    'navigation-list': navigationList
  }
}
</script>