<template>
  <div class="container">
    <div class="row">
      <h1>Quotes Added</h1>
      <quotes-bar :progress="progress" />
    </div>
    <div class="row">
      <quotes-creator :quotes="quotes" />
    </div>
    <div class="row">
      <div class="quotes-contanier">
        <quote
          v-for="(quote,idx) in quotes"
          :key="idx"
          :quote="quote"
          @quoteWasDestroyed="deletedQuote = $event"
        />
      </div>
      <div class="alert alert-info">
        <strong>Info!</strong> Click on a quote to delete it.
      </div>
    </div>
  </div>
</template>

<script>
import { eventBus } from "./main";
import QuotesBar from "./components/QuotesBar";
import QuotesCreator from "./components/QuotesCreator";
import Quote from "./components/Quote";
export default {
  data() {
    return {
      quotes: [],
      deletedQuote: "",
      progress: 0,
    };
  },
  components: {
    "quotes-bar": QuotesBar,
    "quotes-creator": QuotesCreator,
    quote: Quote,
  },
  methods: {
    initializeProgress() {
      this.progress = this.quotes.length * 10;
    },
  },
  created() {
    this.initializeProgress();
    eventBus.$on("quoteWasCreated", (quote) => {
      this.quotes.push(quote);
      this.initializeProgress();
    });
  },
  watch: {
    deletedQuote(val) {
      const index = this.quotes.indexOf(val);
      if (index > -1) {
        this.quotes.splice(index, 1);
        this.initializeProgress();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.quotes-contanier {
  display: flex;
  flex-wrap: wrap;
}
.alert-info {
  margin-top: 30px;
  text-align: center;
}
</style>
