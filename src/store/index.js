import { createStore } from 'vuex'

export default createStore({
  state: {
    diveSites: [
      { id: 1, name: 'Great Blue Hole', description: 'Famous for its circular shape and deep blue color.', difficulty: 'Advanced', location: 'Belize', depth: 124, bestTime: 'April to June', marineLife: ['Caribbean reef shark', 'Midnight parrotfish', 'Stalactite'] },
      { id: 2, name: 'Barracuda Point', description: 'Known for its strong currents and schools of barracuda.', difficulty: 'Intermediate', location: 'Malaysia', depth: 18, bestTime: 'July to September', marineLife: ['Barracuda', 'White tip reef shark', 'Giant trevally'] },
      { id: 3, name: 'SS Thistlegorm', description: 'A WWII shipwreck in the Red Sea.', difficulty: 'Advanced', location: 'Egypt', depth: 30, bestTime: 'June to August', marineLife: ['Hawksbill turtle', 'Batfish', 'Lionfish'] },
      { id: 4, name: 'Coral Garden', description: 'Beautiful shallow reef with diverse marine life.', difficulty: 'Beginner', location: 'Indonesia', depth: 10, bestTime: 'May to October', marineLife: ['Clownfish', 'Butterflyfish', 'Sea turtle'] },
    ]
  },
  mutations: {
    ADD_DIVE_SITE(state, diveSite) {
      state.diveSites.push(diveSite)
    }
  },
  actions: {
    addDiveSite({ commit }, diveSite) {
      commit('ADD_DIVE_SITE', diveSite)
    }
  },
  getters: {
    getDiveSiteById: (state) => (id) => {
      return state.diveSites.find(site => site.id === parseInt(id))
    },
    getAllDiveSites: (state) => {
      return state.diveSites
    }
  }
})