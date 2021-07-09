export default {
    state: {
        stocks: [
            {id: 1, name: 'BMW', price: 110},
            {id: 2, name: 'Google', price: 185},
            {id: 3, name: 'Apple', price: 206},
            {id: 4, name: 'Twitter', price: 87}
          ]
    },
    getters: {
        stocks(state) {
            return state.stocks
        }
    }
}