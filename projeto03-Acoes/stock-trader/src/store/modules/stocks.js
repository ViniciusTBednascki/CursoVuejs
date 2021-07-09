import stocks from '@/data/stocks'

export default {
    state: {
        stocks: []
    },
    getters: {
        getStocks(state) {
            return state.stocks
        }
    },
    mutations: {
        setStocks(state, stocks) {
            state.stocks = stocks
        }
    },
    actions: {
        buyStock({ commit }, order) {
            commit()
        },
        initStocks({ commit }) {
            commit('setStocks', stocks)
        },
    }
}