<template>
  <li class="list-group-item">Server #{{ id }} Status: {{currentStatus}}</li>
</template>

<script>
import { eventBus } from "../../main";
export default {
  data() {
    return {
      currentStatus: this.status,
    };
  },
  props: ["status", "id"],
  created() {
    eventBus.$on("statusWasChanged", (status) => {
      this.currentStatus = status;
    });
  },
};
</script>

<style>
</style>