<template>
  <div id="app">
    <header>
      <h1>Dive Site Explorer</h1>
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/map">Map</router-link>
        <router-link to="/list">Dive Sites</router-link>
      </nav>
    </header>
    <main>
      <router-view></router-view>
    </main>
    <footer>
      <p>&copy; 2024 Dive Site Explorer</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
@import './styles/variables.scss';

body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
  background-color: $background-color;
  color: $text-color;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

header {
  background-color: $primary-color;
  color: white;
  padding: 1rem;
  height: $header-height;

  h1 {
    margin: 0;
    font-size: 1.5rem;
  }

  nav {
    margin-top: 1rem;

    a {
      color: white;
      text-decoration: none;
      margin-right: 1rem;
      padding: 0.5rem 1rem;
      border-radius: 4px;
      transition: background-color 0.3s;

      &:hover, &.router-link-active {
        background-color: $secondary-color;
      }
    }
  }
}

main {
  flex-grow: 1;
  padding: 2rem;
}

footer {
  background-color: $primary-color;
  color: white;
  text-align: center;
  padding: 1rem;
  height: $footer-height;
}
</style>