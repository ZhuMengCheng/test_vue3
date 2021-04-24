<template>
  <div>
    <h1>{{ msg }}</h1>
    <button @click="state.count++">count is: {{ state.count }}</button>
    <p>{{ message }}</p>
    <button v-on:click="reverseMessage">反转 Message</button>
  </div>
</template>

<script setup>
import { defineProps, reactive } from "vue";

defineProps({
  msg: String
});

// setup:()=>{

//     reverseMessage() {
//       this.message = this.message
//         .split("")
//         .reverse()
//         .join("");
//     }

// }

const state = reactive({ count: 0 });
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
