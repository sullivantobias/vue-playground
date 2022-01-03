# Reusability and composition

<h2 style='color: #42b983'>Composition API</h2>

> **Composition API** is a new feature of Vue 3.0

Over time, some of your components may become very huge, with lots of different data, methods, computed and other options. They should be split into smaller components whenever possible, but sometimes this is not enough.

To overcome this, Vue 3 offers an alternative API for declaring components: the **Composition API**.

- with the setup attribute on the `<script>` tag, data, computed, methods and other options can be declared at script top level in any order ; no need to group them by type
- the options are no longer attached to an object `(this.todos)` but handled as independent variables; this involves declaring them via specific functions provided by `Vue`
- to be reactive, data now needs to be declared with `reactive` and `ref` methods
- `ref` is used to encapsulate primitive values such as string newTodo in a `{ value }` object structure so that you can change their value without changing their reference (mutation rather than reassignment) ; otherwise Vue would lose track of this variable (see Reactivity section).
- `data` stored as object properties or array elements do not have this reassignment problem, so you can declare them with `reactive`

Example: [<span style='color: #42b983'>**Composition API Folder**</span> ](src/components/reusability/compositionApi)

<h2 style='color: #42b983'>Custom directives</h2>

`Vue` allows you to declare your own custom directives (opens new window)- the Vue-specific syntax that is used in component templates. This feature is often used by third-party libraries. Custom directives allow you to reuse business logic on multiple elements without using a dedicated component. However, be careful not to abuse them because it is difficult to keep track of all custom directives in a project, and they may conflict with future developments in `Vue`.

    // Register a custom directive called 'v-focus' on your app
    app.directive("focus", {
        // When the bound element is inserted into the DOM...
        mounted: function(el) {
            // Focus the element
            el.focus();
        }
    });
