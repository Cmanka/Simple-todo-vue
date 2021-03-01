<template>
  <li>
    <label>
      <input
        type="checkbox"
        :checked="todo?.completed"
        v-on:change="$emit('toggle-todo', todo?.id)"
      />
      <span v-bind:class="{ done: todo?.completed }">{{ todo?.title }}</span>
      <button v-on:click="$emit('remove-todo', todo?.id)">Remove</button>
      <router-link
        :to="{
          name: 'TodoPage',
          params: {
            id: todo?.id,
            title: todo?.title,
            completed: todo?.completed,
          },
        }"
        >Detail</router-link
      >
    </label>
  </li>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Todo } from '@/core/interfaces/ITodo';

export default defineComponent({
  name: 'TodoItem',
  props: {
    todo: {
      type: Object as PropType<Todo>,
      requried: true,
    },
  },
});
</script>

<style scoped>
label {
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  background-color: whitesmoke;
  border: 1px solid black;
  font-size: 36px;
}

a {
  color: black;
  border: 1px solid black;
  padding: 5px 10px;
  font-size: 16px;
  margin-right: 5px;
  text-decoration: none;
}

span {
  flex-basis: 60%;
}
button {
  flex-basis: 10%;
}
input {
  flex-basis: 5%;
}
.done {
  text-decoration: line-through;
}
</style>
