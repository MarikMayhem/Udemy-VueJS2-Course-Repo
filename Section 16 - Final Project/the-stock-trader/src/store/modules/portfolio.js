const state = {
    stocks: []
}
const getters = {
    stocks: (state) => {
        return state.stocks
    },
    stockPortfolio(state, getters) {
        return state.stocks.map(stock => {
            const record = getters.avaliableStocks.find(element => element.id == stock.id);
            return {
                id: stock.id,
                quantity: stock.quantity,
                title: record.title,
                price: record.price
            }
        });
    },
}
const actions = {
    sellStocks: ({ commit }, payload) => {
        commit('SELL_STOCK', payload)
    },
    recieveMoney: ({ commit }, payload) => {
        //SEND to stocks.js
        commit('INCREMENT_MONEY', payload)
    },

}
const mutations = {
    'SET_PORTFOLIO'(state, portfolio) {
        state.stocks = portfolio ? portfolio : [];
    },
    'SELL_STOCK'(state, payload) {
        const { id, quantity } = payload
        // //Find the current element
        var stock = state.stocks.find(x => x.id === id);
        stock.quantity -= quantity

        //Clear empty Stocks
        state.stocks = state.stocks.filter(function (el) {
            return el.quantity !== 0;
        })
    },
}

export default {
    state,
    getters,
    actions,
    mutations
}