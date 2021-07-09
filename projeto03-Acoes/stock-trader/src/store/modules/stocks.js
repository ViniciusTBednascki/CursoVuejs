import stocks from '@/data/stocks'

export default {
    state: {
        stocks: []
    },
    getters: {
        stocks(state) {
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
            commit('buyStock', order)
        },
        initStocks({ commit }) {
            commit('setStocks', stocks)
        }
    }
}