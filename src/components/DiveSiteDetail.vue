<template>
  <div class="dive-site-detail">
    <div v-if="site" class="site-card">
      <h2>{{ site.name }}</h2>
      <img :src="site.imageUrl" :alt="site.name" class="site-image">
      <p class="description">{{ site.description }}</p>
      <div class="details">
        <p><strong>Location:</strong> {{ site.location }}</p>
        <p><strong>Depth:</strong> {{ site.depth }} meters</p>
        <p><strong>Difficulty:</strong> {{ site.difficulty }}</p>
        <p><strong>Best Time to Visit:</strong> {{ site.bestTime }}</p>
      </div>
      <div class="marine-life">
        <h3>Marine Life</h3>
        <ul>
          <li v-for="animal in site.marineLife" :key="animal">{{ animal }}</li>
        </ul>
      </div>
    </div>
    <p v-else>Loading dive site details...</p>
  </div>
</template>

<script>
export default {
  name: 'DiveSiteDetail',
  data() {
    return {
      site: null
    }
  },
  created() {
    // In a real app, you'd fetch this data from an API
    this.site = {
      id: this.$route.params.id,
      name: 'Great Blue Hole',
      imageUrl: 'https://example.com/great-blue-hole.jpg',
      description: 'The Great Blue Hole is a giant marine sinkhole off the coast of Belize. It\'s a world-class destination for recreational scuba divers.',
      location: 'Lighthouse Reef, Belize',
      depth: 124,
      difficulty: 'Advanced',
      bestTime: 'April to June',
      marineLife: ['Caribbean reef shark', 'Midnight parrotfish', 'Stalactite']
    }
  }
}
</script>

<style scoped>
.dive-site-detail {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
}

.site-card {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  max-width: 600px;
  width: 100%;
}

.site-image {
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 1rem;
}

h2 {
  color: var(--primary-color);
  margin-top: 0;
}

.description {
  font-style: italic;
  margin-bottom: 1rem;
}

.details p {
  margin: 0.5rem 0;
}

.marine-life ul {
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.marine-life li {
  background-color: var(--secondary-color);
  color: white;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.9rem;
}
</style>