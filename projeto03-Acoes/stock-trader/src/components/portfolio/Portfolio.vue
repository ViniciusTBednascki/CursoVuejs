<template>
  <v-layout row wrap>
    <Stock v-for="stock in stocks" :key="stock.id" :stock="stock" parent="Portfolio"/>
  </v-layout>
</template>

<script>
import Stock from '../Stock.vue'
import { mapGetters } from 'vuex'

export default {
  components: {Stock},
  computed: {
    ...mapGetters({
      stocks: 'stockPortfolio'
    })
  }
}
</script>

<style>

</style>