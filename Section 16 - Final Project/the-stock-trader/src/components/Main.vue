<template>
  <div class="jumbotron jumbo-custom">
    <div class="row">
      <div class="container">
        <h1>Trade or View your Portfolio</h1>
        <p>You may Save & Load your data</p>
        <p>Click on "End Day" to start a new day!</p>
      </div>
    </div>
    <div class="row row-space">
      <div class="container">
        <h3>Your Funds: {{avaliableFunds | money}}</h3>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: mapGetters(["avaliableFunds"]),
  data() {
    return {};
  },
};
</script>

<style>
.jumbo-custom {
  background-color: white;
  margin-top: 30px;
  padding-bottom: 20px;
  border: 1.5px solid lightgray;
}
.row-space {
  margin-top: 50px;
}
</style>