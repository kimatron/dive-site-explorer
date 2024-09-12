<template>
  <div class="dive-site-list">
    <h2>Dive Sites</h2>
    <div class="filters">
      <input v-model="searchQuery" placeholder="Search dive sites..." class="search-input">
      <select v-model="difficultyFilter" class="difficulty-filter">
        <option value="">All Difficulties</option>
        <option value="Beginner">Beginner</option>
        <option value="Intermediate">Intermediate</option>
        <option value="Advanced">Advanced</option>
      </select>
    </div>
    <ul>
      <li v-for="site in filteredSites" :key="site.id" class="site-item">
        <h3>{{ site.name }}</h3>
        <p>{{ site.description }}</p>
        <p><strong>Difficulty:</strong> {{ site.difficulty }}</p>
        <router-link :to="{ name: 'DiveSiteDetail', params: { id: site.id } }" class="view-details">View Details</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'DiveSiteList',
  data() {
    return {
      searchQuery: '',
      difficultyFilter: ''
    }
  },
  computed: {
    ...mapGetters(['getAllDiveSites']),
    filteredSites() {
      return this.getAllDiveSites.filter(site => {
        const matchesSearch = site.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                              site.description.toLowerCase().includes(this.searchQuery.toLowerCase());
        const matchesDifficulty = this.difficultyFilter === '' || site.difficulty === this.difficultyFilter;
        return matchesSearch && matchesDifficulty;
      });
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/variables.scss';

.dive-site-list {
  max-width: 800px;
  margin: 0 auto;
}

.filters {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
}

.search-input, .difficulty-filter {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.search-input {
  flex-grow: 1;
}

ul {
  list-style-type: none;
  padding: 0;
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
</style>