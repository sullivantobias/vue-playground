export default {
  name: "methods-component",
  data() {
    return {
      name: "Elon Musk",
    };
  },
  methods: {
    greet() {
      // 'this' refers to the view instance
      this.say("Hi " + this.name, this.greet);
    },
    say(message, _function) {
      // if a method is independent of the instance (no reference to 'this')
      // then it could be relevant to move it to a separate module
      alert(`${message} ! We called the method '${_function.name}'`);
    },
  },
};
