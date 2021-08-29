
<template>
  <div class="container">
    <menu-bar></menu-bar>
    <router-view></router-view>
    <the-footer></the-footer>
  </div>
</template>

<script>
import MenuBar from "./components/MenuBar.vue";
import TheFooter from "./components/TheFooter.vue";

export default {
  name: "App",
  components: {
    MenuBar,
    TheFooter,
  },
};
</script>