<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import SingleFileComponent from './components/single-file-component.vue';
import VBind from './components/directives/v-bind/v-bind.vue';
import VModel from './components/directives/v-model/v-model.vue';
import VIf from './components/directives/v-if/v-if.vue';
import VFor from './components/directives/v-for/v-for.vue';
import VOn from './components/directives/v-on/v-on.vue';
import Methods from './components/components-example/methods/methods.vue';
</script>

<script>
export default {
  name: "app",
  data() {
    return {
      view: 'directives'
    }
  },
  methods: {
      handleView(view) {
          this.view = view;
      }
  },
};
</script>

<template>
<SingleFileComponent />
<div class="views">
    <button 
        :class="{ selected: view === 'directives' }" 
        @click="handleView('directives')">
        Directives
    </button>
    <button 
        :class="{ selected: view === 'components' }" 
        @click="handleView('components')">
        Components
    </button>
</div>

<div v-if="view === 'directives'" class="directives">
    <p>V-bind Example</p>
    <VBind />
    <p>V-model Example</p>
    <VModel />
    <p>V-if Example</p>
    <VIf />
     <p>V-For Example</p>
    <VFor />
    <p>V-On Example</p>
    <VOn />
</div>

<div v-else-if="view === 'components'" class="components">
    <p>Methods Example</p>
    <Methods/>
</div>

</template>

<style lang="scss">
@import './commons/colors.scss';

body, html {
    box-sizing: border-box;
    height: 100%;
    font-family: "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
    font-size: 1rem;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: $body-color;

    .section {
        border: 2px solid $main-color;
        padding: 20px;
    }

    .views {
        display: flex;
        flex-basis: 100%;
    }

    button {
        padding: 10px;
        border: none;
        background-color: $main-color;
        color: $white;
        margin-right: 20px;
        cursor: pointer;
        opacity: 0.7;

        &:hover, &.selected {
            opacity: 1;   
        }
    }

    p {
        font-weight: bold;
        font-size: 16px;
        flex-basis: 100%;
    }

    span {
        color: $main-color; 
        font-weight: bold;
    }

    a {
        text-decoration: none;
    }
}

#app {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin: 2vw auto;
    max-width: 900px;
}

</style>