<template>
  <div class="col-6">
    <div class="form-group">
      <label for="exampleFormControlTextarea1">Quote</label>
      <textarea class="form-control" id="textarea-quote" rows="3" v-model="quoteText"></textarea>
      <button
        @click="createQuote($event)"
        type="button"
        class="btn btn-primary send-quote"
      >Add quote</button>
    </div>
  </div>
</template>

<script>
import { eventBus } from "../main";

export default {
  props: ["quotes"],
  data() {
    return {
      quoteText: "",
    };
  },
  methods: {
    createQuote(event) {
      if (this.quoteText && this.quotes.length < 10) {
        eventBus.$emit("quoteWasCreated", this.quoteText);
        this.quoteText = "";
      } else {
        alert("Too many quotes! Delete some before adding new ones!");
      }
    },
  },
};
</script>

<style scoped>
.form-group {
  width: 60%;
  margin: auto;
}
.send-quote {
  display: block;
  margin: 20px auto;
}
</style>