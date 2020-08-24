<template>
  <div class="col-sm-8 col-md-6">
    <div class="container custom-container">
      <div class="alert alert-success fixed-margin" role="alert">
        <b>{{stock.title}}</b>
        <small>(price {{stock.price | money}})</small>
      </div>
      <div class="container border-container">
        <input type="number" placeholder="Quantity" class="form-control" v-model="quantity" min="0" />
        <button type="button" class="btn btn-success" @click="buyStock">Buy</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: ["stock"],
  data() {
    return {
      quantity: "",
    };
  },
  methods: {
    buyStock() {
      let stock = {
        id: this.stock.id,
        title: this.stock.title,
        price: this.stock.price,
        quantity: +this.quantity,
        priceSum: this.quantity * this.stock.price,
      };

      this.$store.dispatch("buyStocks", stock);
      this.quantity = "";
    },
  },
};
</script>

<style>
</style>