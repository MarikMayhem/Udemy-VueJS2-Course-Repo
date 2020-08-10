<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <br />
        <button @click="changeComponentStatus($event)" class="btn btn-primary">Load Blue Template</button>
        <button @click="changeComponentStatus($event)" class="btn btn-success">Load Green Template</button>
        <button @click="changeComponentStatus($event)" class="btn btn-danger">Load Red Template</button>
        <hr />component
        <component :is="currentComponent">
          <h1>I am a {{currentComponent}} component</h1>
          <p>A great component</p>
          <p slot="badComponent">But sometimes a very bad Component</p>
        </component>
      </div>
    </div>
  </div>
</template>

<script>
import Blue from "./components/Blue.vue";
import Green from "./components/Green.vue";
import Red from "./components/Red.vue";

export default {
  data() {
    return {
      currentComponent: "Blue",
    };
  },
  components: {
    Blue,
    Green,
    Red,
  },
  methods: {
    changeComponentStatus(status) {
      let componentStatus = status.srcElement.innerText.split(" ")[1];
      this.currentComponent = componentStatus;
    },
  },
};
</script>

<style>
</style>
