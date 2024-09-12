<template>
  <div class="dive-site-detail">
    <div v-if="site" class="site-card">
      <h2>{{ site.name }}</h2>
      <button @click="toggleFavorite" :class="{ 'is-favorite': site.isFavorite }" class="favorite-btn">
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
    }
  },
  methods: {
    ...mapActions(['toggleFavorite']),
    toggleFavorite() {
      this.toggleFavorite(this.site.id)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/variables.scss';

.favorite-dive-sites {
  max-width: 800px;
  margin: 0 auto;
}

.site-item {
  @include card-style;
  margin-bottom: 1rem;
}

h3 {
  color: $primary-color;
  margin-top: 0;
}

.view-details {
  display: inline-block;
  background-color: $secondary-color;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  text-decoration: none;
  margin-top: 0.5rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: $primary-color;
  }
}


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

  &.is-favorite {
    background-color: $primary-color;
  }
}
</style>