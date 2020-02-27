<template>
  <div>
    <h1>{{ docs.displayName }}</h1>
    <p v-if="docs.description">{{ docs.description }}</p>
    <h2>Preview</h2>
    <div class="preview">
      <slot />
    </div>
    <h2>Props</h2>
    <table class="props">
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="prop in docs.props" :key="prop.name">
          <td>{{ prop.name }}</td>
          <td>{{ prop.type.name }}</td>
          <td>{{ prop.description }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    component: {
      required: true
    }
  },
  computed: {
    docs() {
      return this.component.__docgenInfo
    }
  }
}
</script>

<style scoped>
.props {
  margin: auto;
}

.preview {
  padding: 16px;
  margin: 16px auto;
  max-width: 800px;
  border: 1px solid goldenrod;
  border-radius: 4px;
}
</style>
