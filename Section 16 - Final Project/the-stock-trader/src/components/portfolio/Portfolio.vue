<template>
  <div class="stock-container">
    <boughtStock v-for="(stock,idx) in stockPortfolio" :key="idx" :stock="stock" />
  </div>
</template>

<script>
import BoughtStock from "./BoughtStock";
import { mapGetters } from "vuex";
export default {
  computed: mapGetters(["stockPortfolio"]),
  components: {
    boughtStock: BoughtStock,
  },
};
</script>

<style scoped>
</style>