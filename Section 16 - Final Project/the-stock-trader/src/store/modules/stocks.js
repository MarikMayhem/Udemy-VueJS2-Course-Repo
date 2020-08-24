import stocks from '../../data/stocks'

const state = {
    stocks: [],
    funds: 10000
}
const getters = {
    avaliableStocks: (state) => {
        return state.stocks
    },
    avaliableFunds: (state) => {
        return state.funds
    }
}
const actions = {
    initStocks: ({ commit }) => {
        commit('SET_STOCKS', stocks);
    },
    initFunds: ({ commit }) => {
        commit('SET_FUNDS', funds);
    },
    buyStocks: ({ commit, getters }, payload) => {
        commit('PURCHASE_STOCK', { getters, payload })
    },
    randomizeStocks: ({ commit }) => {
        commit('RND_STOCKS');
    },
}
const mutations = {
    'SET_STOCKS'(state, stocks) {
        state.stocks = stocks;
    }
    , 'SET_FUNDS'(state, funds) {
        state.funds = funds;
    },
    'PURCHASE_STOCK'(state, { getters, payload }) {
        const { id, title, price, quantity, priceSum } = payload;
        var myStocks = getters.stocks;
        var isOnRecord = myStocks.find(x => x.id === id);
        isOnRecord ? isOnRecord.quantity += quantity : myStocks.push({ id, title, price, quantity })

        // Decrement Money
        state.funds < priceSum ? alert('Not enough Money') : state.funds -= priceSum
    },
    //Recieved from portfolio.js
    'INCREMENT_MONEY'(state, priceSum) {
        state.funds += priceSum
    },
    'RND_STOCKS'(state) {
        state.stocks.forEach(stock => {
            stock.price = Math.round(stock.price * (1 + Math.random() - 0.5));
        });
    }
}


export default {
    state,
    getters,
    actions,
    mutations
}