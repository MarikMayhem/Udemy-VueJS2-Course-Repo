<template>
  <div class="container">
    <h1>Quotes Added</h1>
    <quotes-bar />
  </div>
</template>

<script>
import QuotesBar from "./components/QuotesBar";
export default {
  components: { "quotes-bar": QuotesBar },
};
</script>

<style>
</style>
