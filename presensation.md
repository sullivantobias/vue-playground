<h1 style='color: #42b983'>Vue Presentation</h1>

## Tools to install

&nbsp;

- ### **Nodejs**

- ### **Visual Studio Code and Vetur/Volar\***
- ### **Vue Devtools**
- ### **Vue CLI or VITE**

&nbsp;

\*For Vue 2, we recommend Vetur.

\*For Vue 3, a new extension named Volar has been created specifically for Vue 3 and has better performance than Vetur.

&nbsp;

<h1 style='color: #42b983'>Component Structure</h1>

## A <span style='color: #42b983'>**Vue.js**</span> application is divided into several components

- A component is a .vue file

## A <span style='color: #42b983'>**.vue**</span> file consists of three optional elements:

- the template tag contains the HTML code of the component
- the script tag (optional) contains the JavaScript code of the component
- the style tag (optional) contains the CSS style of the component

Example: [<span style='color: #42b983'>**Vue File**</span> ](/src/components/single-file-component.vue)

<h1 style='color: #42b983'>v-bind: Bind properties</h1>

Allows you to bind an expression to the value of a property of an HTML element or component. Since this is the most commonly used directive, we usually use the shortened syntax :property="value".

Example: [<span style='color: #42b983'>**V-Bind Folder**</span> ](/src/components/directives/v-bind)

<h1 style='color: #42b983'>v-model: Forms and inputs</h1>

Allows you to bind the value of a form field to a component data item. It is a two-way binding: the variable is updated when the contents of the field change (typically by the user) and vice versa.

Example: [<span style='color: #42b983'>**V-Model Folder**</span> ](/src/components/directives/v-model)

<h1 style='color: #42b983'>v-if: Conditions</h1>

Allows you to insert or not an element according to a condition. If you want the element not to be removed from the DOM but just visually hidden in CSS, use v-show instead.

The v-else-if and v-else directives work in the same way as their JavaScript equivalent and depend on the v-if condition of the element directly preceding them.

Example: [<span style='color: #42b983'>**V-If Folder**</span> ](/src/components/directives/v-if)

<h1 style='color: #42b983'>v-for: Loops</h1>

Generates lists of elements by repeating a template by iteration on an iterable value: typically an Array, the list of properties of an object, or a fixed number of iterations.

The directive declares local variables representing each iterated element and their index, which can be used in the template within the element.

Example: [<span style='color: #42b983'>**V-For Folder**</span> ](/src/components/directives/v-for)

<h1 style='color: #42b983'>v-on: Events</h1>

Define an action to take when an event occurs. It can be a DOM event (click, mouseover, focus, etc.) or a custom event emitted by a child component.

Example: [<span style='color: #42b983'>**V-On Folder**</span> ](/src/components/directives/v-on)

<h3 style='color: #42b983'>Modifiers</h3>

Modifiers are suffixes used to slightly change the behavior of some directives: for example stop the propagation of a captured event with v-on

<span style='color: #42b983'>**The propagation of the click event will be stopped**</span>

`<a @click.stop="onThis">...</a>`

<span style='color: #42b983'>**submitting the form will not reload the page**</span>

`<form @submit.prevent="onSubmit">...</form>`

<span style='color: #42b983'>**Modifiers can be chained**</span>

`<a @click.stop.once="doSomethingOnce">...</a>`

<span style='color: #42b983'>**Also available: .tab, .delete, .esc, .space...**</span>

`<input @keypress.enter="submit" />`
