<template>
  <the-header title="Learning resources"></the-header>
  <the-resources></the-resources>
</template>

<script>
import TheResources from './components/learning-resources/TheResources.vue';
import TheHeader from './components/layouts/TheHeader.vue';

export default {
  components: {
    TheHeader,
    TheResources,
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>
