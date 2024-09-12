import { createStore } from 'vuex'

export default createStore({
  state: {
    diveSites: [
      { id: 1, name: 'Great Blue Hole', description: 'Famous for its circular shape and deep blue color.', difficulty: 'Advanced', location: 'Belize', depth: 124, bestTime: 'April to June', marineLife: ['Caribbean reef shark', 'Midnight parrotfish', 'Stalactite'], isFavorite: false },
      { id: 2, name: 'Barracuda Point', description: 'Known for its strong currents and schools of barracuda.', difficulty: 'Intermediate', location: 'Malaysia', depth: 18, bestTime: 'July to September', marineLife: ['Barracuda', 'White tip reef shark', 'Giant trevally'], isFavorite: false },
      { id: 3, name: 'SS Thistlegorm', description: 'A WWII shipwreck in the Red Sea.', difficulty: 'Advanced', location: 'Egypt', depth: 30, bestTime: 'June to August', marineLife: ['Hawksbill turtle', 'Batfish', 'Lionfish'], isFavorite: false },
      { id: 4, name: 'Coral Garden', description: 'Beautiful shallow reef with diverse marine life.', difficulty: 'Beginner', location: 'Indonesia', depth: 10, bestTime: 'May to October', marineLife: ['Clownfish', 'Butterflyfish', 'Sea turtle'], isFavorite: false },
    ]
  },
  mutations: {
    TOGGLE_FAVORITE(state, id) {
      const site = state.diveSites.find(site => site.id === parseInt(id))
      if (site) {
        site.isFavorite = !site.isFavorite
        console.log(`Site ${id} favorite status changed to:`, site.isFavorite)
      } else {
        console.log(`Site ${id} not found`)
      }
    }
  },
  actions: {
    toggleFavorite({ commit }, id) {
      console.log('toggleFavorite action called with id:', id)
      commit('TOGGLE_FAVORITE', id)
    }
  },
  getters: {
    getDiveSiteById: (state) => (id) => {
      const site = state.diveSites.find(site => site.id === parseInt(id))
      console.log(`getDiveSiteById called for id ${id}, found:`, site)
      return site
    },
    getAllDiveSites: (state) => {
      return state.diveSites
    },
    getFavoriteDiveSites: (state) => {
      return state.diveSites.filter(site => site.isFavorite)
    }
  }
})
