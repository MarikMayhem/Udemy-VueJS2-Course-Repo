<template>
  <div class="container">
    <nav class="navbar navbar-expand-md navbar-light bg-light">
      <router-link to="/" class="navbar-brand" active-class="active" exact>Stock Trader</router-link>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <router-link to="/portfolio" tag="li" class="nav-item" active-class="active" exact>
            <a class="nav-link" href="#">Portfolio</a>
          </router-link>
          <router-link to="/stocks" tag="li" class="nav-item" active-class="active" exact>
            <a class="nav-link" href="#">Stocks</a>
          </router-link>
        </ul>
        <!-- Second part  -->
        <ul class="navbar-nav my-2 my-lg-0">
          <li class="nav-item active">
            <a class="nav-link" @click="endDay">
              End day
              <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >Save & load</a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" @click="saveData">Save data</a>
              <a class="dropdown-item" @click="loadData">Load data</a>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Funds: {{avaliableFunds | money}}</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["avaliableFunds", "stockPortfolio", "avaliableStocks"]),
  },
  methods: {
    ...mapActions(["randomizeStocks", "loadStocksData"]),
    endDay() {
      this.randomizeStocks();
    },

    saveData() {
      const stocksObj = {
        stockPortfolio: this.stockPortfolio,
        stocks: this.avaliableStocks,
        funds: this.avaliableFunds,
      };

      this.$http.put("stocks.json", stocksObj).then(
        (response) => {
          alert("Data saved successfuly");
        },
        (error) => {
          alert("Error saving data");
        }
      );
    },
    loadData() {
      this.loadStocksData();
    },
  },
};
</script>

<style>
</style>