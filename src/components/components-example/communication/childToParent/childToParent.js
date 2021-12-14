export default {
  name: "childToParent-component",
  data() {
    return {
      comment: "",
    };
  },
  emits: ["comment"],
  methods: {
    sendComment() {
      this.$emit("comment", this.comment);
    },
  },
};
