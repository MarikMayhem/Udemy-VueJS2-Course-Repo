<template>
  <div class="form-group">
    <label for="exampleInputEmail1">First and last name</label>
    <input type="text" class="form-control" id="first-and-last-name" v-model="inputNames" />
  </div>
</template>

<script>
export default {
  props: ["value"],
  data() {
    return {
      inputNames: "",
    };
  },
  watch: {
    inputNames(value) {
      this.$emit("input", value);
    },
  },
};
</script>

<style>
</style>