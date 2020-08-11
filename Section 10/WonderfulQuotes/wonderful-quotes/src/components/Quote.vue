<template>
  <div @click="deleteQuote($event)" class="container quote">
    <h3>{{quote}}</h3>
  </div>
</template>

<script>
import { eventBus } from "../main";

export default {
  props: ["quote"],
  methods: {
    deleteQuote(event) {
      this.$emit("quoteWasDestroyed", event.target.innerText);
    },
  },
};
</script>

<style scoped>
.quote {
  cursor: pointer;
  border: 1px solid gray;
  font-family: "Arizonia", cursive;
  width: 20%;
  margin: inherit;
  margin-right: 36px;
  margin-top: 25px;
}
</style>