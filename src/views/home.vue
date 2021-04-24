<template>
  <div>{{ title }}2</div>
</template>

<script>
export default {
  name: "Home",
  props: {
    title: String
  },
  setup(props) {
    console.log(props.title);
  }
};
</script>