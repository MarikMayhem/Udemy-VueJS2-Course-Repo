<template>
  <div class="col-xs-12 col-sm-6">
    <p>Server Details are currently not updated</p>
    <button @click="changeServerStatus">Change Status</button>
  </div>
</template>

<script>
import { eventBus } from "../../main";

export default {
  data() {
    return {
      status: "",
    };
  },
  methods: {
    changeServerStatus() {
      this.status = "Normal";
      eventBus.$emit("statusWasChanged", this.status);
    },
  },
};
</script>

<style>
</style>
