<template>
  <div class="hello">
    <span>{{ msg }}</span>
  </div>
</template>

<script>
/**
 * My awesome super fantastic component!!!!
 */
export default {
  name: 'HelloWorld',
  props: {
    /**
     * JSDoc Message!
     */
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  color: tomato;
}
</style>
