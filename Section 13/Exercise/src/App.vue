<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Filters & Mixins</h1>
        <!-- Exercise 1) -->
        <!-- Build a local Filter which reverses the Text it is applied on -->

        <p>{{ ExerciseOne | reverse}}</p>

        <!-- Exercise 2 -->
        <!-- Build a global Filter which counts the length of a word and it appends it -->
        <!-- Like this: "Test" => Gets Filtered to => "Test (4)" -->

        <p>{{ ExerciseTwo | counter}}</p>

        <!-- Exercise 3 -->
        <!-- Do the same as in Exercises 1 & 2, now with Computed Properties -->
        <p>{{reverseComp}}</p>
        <p>{{lowercaseComp}}</p>

        <!-- Exercise 4 -->
        <!-- Share the Computed Property rebuilding Exercise 2 via a Mixin -->
        <p>{{mixinLowerCase}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { Mixin } from "./mixin.js";
export default {
  data() {
    return {
      ExerciseOne: "Exercise One",
      ExerciseTwo: "Exercise Two",
      ExerciseThree: "Exercise Three",
      ExerciseFour: "EXERCISE FOUR",
    };
  },
  mixins: [Mixin],
  filters: {
    reverse(value) {
      return value.split("").reverse().join("");
    },
  },
  computed: {
    reverseComp() {
      return this.ExerciseThree.split("").reverse().join("");
    },
    lowercaseComp() {
      return this.ExerciseThree.toLowerCase();
    },
  },
};
</script>

<style>
</style>
