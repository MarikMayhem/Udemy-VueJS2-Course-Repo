import Main from './components/Main.vue'
import Portfolio from './components/portfolio/Portfolio.vue'
import Stocks from './components/stocks/Stocks.vue'


export const routes = [
    { path: '', component: Main },
    { path: '/portfolio', component: Portfolio },
    { path: '/stocks', component: Stocks },
];