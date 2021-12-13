export default {
  name: "parentToChild-component",
  props: ["title", "content", "method"],
};

/* You can specify type of props like this 

props: {
  propA: Number, // null matches any type
  propB: [String, Number], // multiple valid types
  propC: {
    type: String,
    default: "test"
  },
  propD: {
    required: true,
    validator: value => value.startsWith("_")
  }
}
https://vuejs.org/v2/guide/components-props.html

*/
