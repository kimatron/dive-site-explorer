<template>
  <div class="dive-site-list">
    <h2>Dive Sites</h2>
    <ul>
      <li v-for="site in diveSites" :key="site.id">
        <h3>{{ site.name }}</h3>
        <p>{{ site.description }}</p>
        <router-link :to="{ name: 'DiveSiteDetail', params: { id: site.id } }">View Details</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'DiveSiteList',
  data() {
    return {
      diveSites: [
        { id: 1, name: 'Great Blue Hole', description: 'Famous for its circular shape and deep blue color.' },
        { id: 2, name: 'Barracuda Point', description: 'Known for its strong currents and schools of barracuda.' },
        { id: 3, name: 'SS Thistlegorm', description: 'A WWII shipwreck in the Red Sea.' },
      ]
    }
  }
}
</script>

<style scoped>
.dive-site-list {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  background-color: #f0f0f0;
  margin-bottom: 1rem;
  padding: 1rem;
  border-radius: 8px;
}

h3 {
  margin-top: 0;
}
</style>