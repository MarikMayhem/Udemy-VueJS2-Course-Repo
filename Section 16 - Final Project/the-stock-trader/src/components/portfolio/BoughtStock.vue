<template>
  <div class="col-sm-8 col-md-6">
    <div class="container custom-container">
      <div class="alert alert-primary fixed-margin" role="alert">
        <b slot="title">{{stock.title}}</b>
        <small>(price {{stock.price | money}} | quantity {{stock.quantity}} )</small>
      </div>
      <div class="container border-container">
        <input
          type="number"
          placeholder="Quantity"
          class="form-control"
          v-model="currentQuantity"
          min="0"
          :max="stock.quantity"
        />
        <button type="button" class="btn btn-danger" @click="sellStock">Sell</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["stock"],
  data() {
    return {
      currentQuantity: "",
    };
  },
  methods: {
    sellStock() {
      let priceSum = this.currentQuantity * this.stock.price;

      let soldStock = {
        id: this.stock.id,
        title: this.stock.title,
        quantity: this.currentQuantity,
        price: this.stock.price,
      };

      this.$store.dispatch("sellStocks", soldStock);
      this.$store.dispatch("recieveMoney", priceSum);
      this.currentQuantity = "";
    },
  },
};
</script>

<style>
</style>