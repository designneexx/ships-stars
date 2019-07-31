
export const state = () => ({
  sidebar: false,
  starsShips: []
})

export const mutations = {
  toggleSidebar (state) {
    state.sidebar = !state.sidebar
  },
  initStarsShips (state, starsShips) {
    state.starsShips = starsShips
  }
}

export const actions = {
  async initStarsShips ({ commit }) {
    try {
      const starsShips = await fetch('http://swapi.co/api/starships/', {
        mode: 'no-cors'
      }).then(res => res.json())
      commit('initStarsShips', starsShips.results)
    } catch (e) {
      commit('initStarsShips', [])
    }
  }
}

export const getters = {
  getSearchedStarsShips: state => route => {
    if (!route.query) return state.starsShips
    const searched = route.query.search ? route.query.search.trim().toLowerCase().replace(/\s/gi, '') : ''
    return searched ? state.starsShips.filter(it => {
      if (
        it.name.toLowerCase().replace(/\s/gi, '').indexOf(searched) !== -1 ||
        it.model.toLowerCase().replace(/\s/gi, '').indexOf(searched) !== -1 ||
        it.manufacturer.toLowerCase().replace(/\s/gi, '').indexOf(searched) !== -1 ||
        it.starship_class.toLowerCase().replace(/\s/gi, '').indexOf(searched) !== -1
      ) return true
    }) : state.starsShips
  }
}
