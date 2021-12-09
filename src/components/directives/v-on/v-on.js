export default {
  name: "v-on-component",
  data() {
    return {
      monkeys: [{ hasEyesOpen: false }],
    };
  },
  methods: {
    addMonkey() {
      this.monkeys.push({ hasEyesOpen: false });
    },
    handleEyesMonkey(monkey, isOpen) {
      monkey.hasEyesOpen = isOpen;
    },
    removeMonkey(index) {
      this.monkeys.splice(index, 1);
    },
  },
};
