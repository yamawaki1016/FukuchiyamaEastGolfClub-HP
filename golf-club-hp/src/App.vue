<template>
  <Header class="header" />
  <div class="main">
    <router-view />
  </div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  name: "App",
  components: {
    Header,
  },
};
</script>


<style lang="scss">
body {
  margin: 0px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  // display: flex;
  // flex-direction: column;
  width: 100vm;
  height: 100vh;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
/** ------------------------------------- */
.header {
  height: 10vh;
  margin-top: 5px;
}
.main {
  // flex: 1;
  background-color: rgb(245, 235, 231);
}
/** ------------------------------------- */
ol,
ul {
  list-style: none;
}
</style>
