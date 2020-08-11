<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Directives Exercise</h1>
        <!-- Exercise -->
        <!-- Build a Custom Directive which works like v-on (Listen for Events) -->
        <button v-event-listener:click="tryMe">Click me</button>
        <div class="customDiv" v-event-listener:mouseover="mouseOver"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    tryMe() {
      alert("Activated");
    },
    mouseOver() {
      alert("The mouse hovered the div");
    },
  },
  directives: {
    "event-listener": {
      bind(el, binding) {
        let type = binding.arg;
        let customFunction = binding.value;

        el.addEventListener(type, customFunction);
      },
    },
  },
};
</script>

<style scoped>
.customDiv {
  height: 100px;
  width: 100px;

  background-color: green;
}
</style>
