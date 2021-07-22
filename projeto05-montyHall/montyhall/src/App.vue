<template>
  <div id="app">
    <h1>Monty Hall Problem</h1>
    <Door :number="1" :hasGift="true"/>
  </div>
</template>

<script>
import Door from './componentes/Door.vue'

export default {
  name: 'App',
  components: {Door}
}
</script>

<style>
  * {
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }

  body {
    color: whitesmoke;
    background: linear-gradient(to right, #0f0c29, #302b63, #24243e);
  }

  #app {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  #app h1 {
    border: 1px solid #000;
    background-color: #0004;
    padding: 20px;
    margin-bottom: 60px;
  }
</style>
