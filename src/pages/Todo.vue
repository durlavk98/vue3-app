<template>
  <section class="w-full flex">
    <div class="m-auto my-4">
      <h1 class="text-2xl">Todo App</h1>
      <div class="my-2">
        <form @submit.prevent = "addNewTodo">
          <label for="newTodo">Add new todo</label>
          <input v-model="state.newTodo" type="text" class="border" name="newTodo"/>
          <button type="submit" class="border">Add</button>
        </form>
      </div>
      <button @click="allDone" class="border">All done</button>
      <button @click="allDelete" class="border">All delete</button>
      <ul>
        <div :class="todo.done ? 'done' : ''" v-for="(todo,index) in state.todos" :key="todo.id" class="my-2">
        {{todo.content}}
        <button @click="toggleTodo(todo)" class="border">done</button>
        <button @click="deleteTodo(index)" class="border">delete</button>
      </div>
      </ul>
    </div>
  </section>
</template>

<script>
import { reactive, ref } from 'vue';
export default {
  setup() {
    const state = reactive({
      newTodo: ref(''),
      todos: ref([]),
    })    
    function addNewTodo() {
      state.todos.push({
        id: Date.now(),
        done: false,
        content: state.newTodo
      });
      state.newTodo = '';
    }
    function toggleTodo(todo) {
      todo.done = !todo.done;
    }
    function deleteTodo(index) {
      state.todos.splice(index,1);
    }
    function allDone() {
      state.todos.forEach(todo => {
        todo.done = true;
      });
    }
    function allDelete() {
      state.todos = [];
    }

    return {
      addNewTodo,
      state,
      toggleTodo,
      deleteTodo,
      allDone,
      allDelete,
    };
  }
}
</script>

<style>
.done {
  text-decoration: line-through;
}
</style>