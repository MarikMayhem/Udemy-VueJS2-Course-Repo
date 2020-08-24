<template>
  <div id="app">
    <app-header />
    <div class="container">
      <transition name="slide" mode="out-in">
        <router-view />
      </transition>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
export default {
  components: {
    "app-header": Header,
  },
  data() {
    return {};
  },
  created() {
    this.$store.dispatch("initStocks");
  },
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.stock-container {
  margin-top: 40px;
  display: flex;
  flex-wrap: wrap;
}
.fixed-margin {
  margin: 20px 0 0;
}
.custom-div {
  padding: 0;
}
.border-container {
  border: 1px solid lightgray;
  border-top: none;
  display: flex;
  padding: 20px;
}
.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}

.slide-enter,
.slide-leave-to {
  opacity: 0;
  transform: translateY(-10%);
}
@import "~bootstrap/dist/css/bootstrap.css";
</style>
