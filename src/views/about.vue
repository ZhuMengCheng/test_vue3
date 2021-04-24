<template>
  <div>{{ title }}1</div>
</template>

<script>
export default {
  name: "About",
  props: {
    title: String
  },
  setup(props) {
    console.log(props.title);
  }
};
</script>