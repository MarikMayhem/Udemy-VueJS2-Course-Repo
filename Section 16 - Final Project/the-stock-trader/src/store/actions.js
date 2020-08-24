import Vue from 'vue';

export const loadStocksData = ({ commit }) => {
    Vue.http.get('stocks.json')
        .then(response => response.json())
        .then(data => {
            if (data) {
                const { stocks, funds, stockPortfolio } = data;

                commit('SET_STOCKS', stocks)
                if (stockPortfolio) {
                    commit('SET_PORTFOLIO', stockPortfolio)
                    commit('SET_FUNDS', funds)
                }
            }
        })
}