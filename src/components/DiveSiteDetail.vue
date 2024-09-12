<template>
  <div class="dive-site-detail">
    <h2>Dive Site Detail</h2>
    <p>Details for dive site with ID: {{ $route.params.id }}</p>
    <!-- We'll add more details here later -->
  </div>
</template>

<script>
export default {
  name: 'DiveSiteDetail',
  // We'll add more logic here later
}
</script>

<style scoped>
.dive-site-detail {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}
</style>