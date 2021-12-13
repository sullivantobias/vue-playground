export default {
  name: "computedAndWatchers-component",
  data() {
    return {
      count1: 0,
      count2: 0,
      lastUpdate: null,
    };
  },
  computed: {
    total() {
      return this.count1 + this.count2;
    },
  },
  watch: {
    total() {
      this.lastUpdate = new Date();
    },
  },
};
