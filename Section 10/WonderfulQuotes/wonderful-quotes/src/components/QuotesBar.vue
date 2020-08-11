<template>
  <div class="progress">
    <div
      class="progress-bar"
      role="progressbar"
      :style="{width: `${progress}%`}"
      aria-valuenow="100"
      aria-valuemin="0"
      aria-valuemax="100"
    >{{progress / 10}} / 10</div>
  </div>
</template>

<script>
import { eventBus } from "../main";

export default {
  props: ["progress"],
};
</script>

<style scoped lang="scss" >
</style>