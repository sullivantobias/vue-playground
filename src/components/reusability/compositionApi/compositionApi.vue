<template>
<div class="compositionApi section">
   <ul>
      <li v-for="todo in todos" :key="todo.label">
        <input type="checkbox" v-model="todo.done"> {{todo.label}}
      </li>
      <li>
        <input type="text" v-model="newTodo" placeholder="New task">
        <button @click="addTodo" :disabled="hasNoLabel">Add to todolist</button>
      </li>
    </ul> 
</div>
</template>
<!--  <script src="./compositionApi.js"></script> old way <script> -->
<style src="./compositionApi.scss"></style>
<!-- new way with setup -->
<script setup>
   import { ref, reactive, computed } from "vue"
   
   const todos = reactive([])
   const newTodo = ref("")
   const hasNoLabel = computed(() => newTodo.value.trim() === "")
   
   const addTodo = () => {
     todos.push({ label: newTodo.value, done: false })
     newTodo.value = ""
   }
</script>