<template>
  <div id="app">
    <docs :component="HelloWorld">
      <HelloWorld msg="Welcome to Your Vue.js App" />
    </docs>
  </div>
</template>

<script>
import Docs from './components/Docs'
import HelloWorld from './components/HelloWorld.vue'

console.dir(HelloWorld)

export default {
  name: 'App',
  components: {
    HelloWorld,
    Docs
  },
  computed: {
    HelloWorld: () => HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
