<template>
  <div class="dive-site-detail">
    <div v-if="site" class="site-card">
      <h2>{{ site.name }}</h2>
      <button @click="handleToggleFavorite" :class="{ 'is-favorite': site.isFavorite }" class="favorite-btn">
        {{ site.isFavorite ? '★ Favorite' : '☆ Add to Favorites' }}
      </button>
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
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'DiveSiteDetail',
  computed: {
      ...mapGetters(['getDiveSiteById']),
      site() {
        return this.getDiveSiteById(this.$route.params.id)
      },
    },
    methods: {
    ...mapActions(['toggleFavorite']),
    handleToggleFavorite() {
      if (this.site) {
        console.log('Toggling favorite for site:', this.site.id)
        this.toggleFavorite(this.site.id)
        // Force a re-render
        this.$forceUpdate()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/variables.scss';

.dive-site-detail {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
}

.site-card {
  @include card-style;
  max-width: 600px;
  width: 100%;
}

.favorite-btn {
  background-color: $secondary-color;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: darken($secondary-color, 10%);
  }
}

.is-favorite {
  background-color: gold;
  color: black;
}

.site-image {
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 1rem;
}

h2 {
  color: $primary-color;
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
  background-color: $secondary-color;
  color: white;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.9rem;
}


</style>