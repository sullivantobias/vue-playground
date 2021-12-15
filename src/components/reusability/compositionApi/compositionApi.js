export default {
  name: "compositionApi-component",
  data() {
    return {
      todos: [],
      newTodo: "",
    };
  },
  computed: {
    hasNoLabel() {
      return this.newTodo.trim() === "";
    },
  },
  methods: {
    addTodo() {
      this.todos.push({ label: this.newTodo, done: false });
      this.newTodo = "";
    },
  },
};
