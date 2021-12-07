<!-- template section-->
<template>
  <div>
    <h1>{{ mainTitle }}</h1>
  </div>
</template>

<!-- script section-->
<script>
export default {
  // name of the component | useful for identifying the component during debugging
  name: "Single-File-Component",
  /**
   * The script part of the component must export an object 
   * with the properties of the component by default
   */
  data() {
    return {
      mainTitle: "Welcome to the Vue Playground"
    };
  }
};
</script>

<!-- style section-->
<style lang="scss" scoped>
@import '../commons/colors.scss';

div {
  flex-basis: 100%;
  color: $main-color;
  font-weight: bold;
}
</style>
