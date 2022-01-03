# Components

<h2 style='color: #42b983'>Methods</h2>

The methods of the component are declared in the methods property. They can then be called from an expression in the template or from another method of the component with `this.myMethod()`

Example: [<span style='color: #42b983'>**Methods Folder**</span> ](src/components/components-example/methods)

<h2 style='color: #42b983'>Computed and Watchers</h2>

It is common to want to place within your templates some data that can be directly deduced from other data, or formatted in a certain way. While it is possible to put any JavaScript expression in a directive, a good practice is to limit template complexity and code duplication by declaring computed properties in the component's computed option .

A computed property is a property that can be computed directly and synchronously from other available properties (either props, data or other computed properties). This is similar to a getter, but it is also possible to specify a setter for a computed property. Vue will identify the variables on which a computed property depends to set up the reactivity and update its value when one of its dependencies is mutated.

Vue also lets you declare observers that run some specific code when a property (prop, data, or computed) is mutated. We call this an observed property by a watcher. The observed properties are declared in the watch option of the component.

To distinguish the use cases of computed vs watcher, we will privilege most often the computed properties whenever possible. A watcher is more appropriate when what interests you in a mutation is not so much the new value, but the moment it occurs; to perform server requests or external actions for example.

Example: [<span style='color: #42b983'>**Computed & Watchers Folder**</span> ](src/components/components-example/computedAndWatchers)

<h2 style='color: #42b983'>Component Lifecycle</h2>

### **VUE 2**

<img width="500" src="./resources/vue2_lifecycle.png" />

### **VUE 3**

<img width="500" src="./resources/vue3_lifecycle.svg" />

Each stage of the life cycle of a component calls two callback functions, one just before the framework does its internal work, and the other just after. These callbacks can be used to define a specific behavior for the component at these precise moments:

    export default {
        mounted() {
            console.log(This component has been mounted on the DOM, this.$el refers to the corresponding DOM element.); this.$el.querySelector("input").focus();
        }
    };

Typically, we use created as the equivalent of a constructor function, to initialize certain data or to make some HTTP requests. We use mounted when some initialization steps need to interact with the DOM. Finally, we use destroyed (or unmounted with Vue 3) to clean up when the component is no longer used, for example delete global event listeners to avoid memory leaks. Other callbacks are reserved for more specific use cases.

<h2 style='color: #42b983'>Communication Between Components</h2>

### **Parent to Child Communication with props**

Like any other HTML element, Vue components can receive arguments, called props or properties. Props are used to convey information from a parent component to a child component.

You must declare the list of accepted properties in the props option of the component. Received props can be used in templates or methods just like properties declared in data. The difference is that we will avoid reassigning or mutating props: since these values come from the parent component, we must rather communicate with this parent (ascending communication) for it to make the change itself. The changed value will then be automatically reported to the child components.

Example: [<span style='color: #42b983'>**Parent to child Folder**</span> ](src/components/components-example/communication/parentToChild)

### **Child to parent Communication with Events**

Although a child component can technically access its parent component, it is a bad practice because it induces a tight coupling between the components: the component loses in genericity, it is more difficult to reuse and the risk of infinite loop is higher.

Child components communicate with their parents by using **events**: they emit events that propagate from parent to parent, in the same way as DOM events like a mouse click. **A good component is agnostic of his environment**, it does not know his parents and does not know if the events it emets will ever be intercepted (or "listened to").

To **emit** an event, use the `$emit` method available in all Vue components. It takes as parameter the name of the event, and optionally a value (payload) to transmit. If you need to pass multiple values, encapsulate them in an object. The list of the events sent by a component should be described in the `emits` component option, not mandatory but useful for documentation purposes.

To **listen** to an event emitted by a child component, we use the same `v-on` directive as for DOM events, or `@yourEvent` shorthand. The value passed with the event can be retrieved via the `$event` variable in the directive value.

Example: [<span style='color: #42b983'>**Child to parent Folder**</span> ](src/components/components-example/communication/childToParent)

### **Slots and Content Distribution**

Since Vue components are declared as tags, we can pass them attributes, props, but also place other elements or content inside these tags

The tag content is then placed in a container called the default slot.

Slots can contain any HTML content, including other Vue components. They are very useful for declaring components that serve as a container rather than content, such as dialog windows or layout elements.

In addition to the default slot, you can name certain slots to distribute content to multiple locations, by using the v-slot directive

Example: [<span style='color: #42b983'>**Slot And content Folder**</span> ](src/components/components-example/slotAndContent)

### **Elements References**

To retrieve a reference to an element or child component in a template, use the `ref` directive. Once the component is mounted on the DOM, the element will be accessible via `vm.$refs[yourReference]`.

    <p ref="label">My paragraph</p>
    <my-child-component ref="child"></my-child-component>

    vm.$refs.label; // reference to paragraph element
    vm.$refs.child; // reference to MyChildComponent instance

<h2 style='color: #42b983'>Complete API of Vue Components</h2>

    export default {
        name: "MyComponent", // useful for debugging purposes
        components: {}, // declared child components
        mixins: [], // share common features between components
        extends: {}, // create components based on other ones
        props: {}, // properties passed from parent
        data() {}, // component internal state variables
        computed: {}, // computed properties
        watch: {}, // observed properties
        methods: {}, // component own methods
        // component lifecycle hooks
        beforeCreate() {},
        created() {},
        beforeMount() {},
        mounted() {},
        beforeUpdate() {},
        updated() {},
        activated() {},
        deactivated() {},
        beforeDestroy() {}, // beforeUnmount with Vue 3
        destroyed() {}, // unmounted with Vue 3
        errorCaptured() {}
    };

### **Vue instance properties**

> vm is often used as a convention to refer to a Vue component instance

- `vm.$data`
- `vm.$props`
- `vm.$slots`
- `vm.$refs`
- `vm.$listeners`
- `vm.$options`: all the component options
- `vm.$el`: reference to the root HTML element on which the component is mounted
- `vm.$parent`: reference to parent component
- `vm.$root`: reference to root component
- `vm.$children`: array of child components

### **Vue instance methods**

- `vm.$watch`: declare programmatically a watcher
- `vm.$set`: assign a property while ensuring reactivity
- `vm.$delete`: unassign a property while ensuring reactivity
- `vm.$on`: declare programmatically an event listener
- `vm.$once`: declare a listener with modifier once
- `vm.$off`: removes an event listener
- `vm.$emit`: emets an event
- `vm.$mount`: bind the component to a DOM element
- `vm.$destroy`: destroys the component instance
- `vm.$forceUpdate`: force complete update of the component (not recommended)
- `vm.$nextTick`: report a function call to next tick in the event loop

#
