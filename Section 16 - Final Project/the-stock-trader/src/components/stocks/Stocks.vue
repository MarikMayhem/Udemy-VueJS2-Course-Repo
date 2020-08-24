<template>
  <div class="stock-container">
    <stock v-for="(stock,idx) in avaliableStocks" :key="idx" :stock="stock"></stock>
  </div>
</template>

<script>
import Stock from "./Stock";
import { mapGetters } from "vuex";

export default {
  components: {
    stock: Stock,
  },
  computed: mapGetters(["avaliableStocks"]),
  data() {
    return {};
  },
};
</script>

<style scoped>
</style>