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
