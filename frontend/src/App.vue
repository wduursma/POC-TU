<template>
  <div id="app">
    <ssbUsp/>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> | 
      <router-link to="/assortment-overview">Assortment</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import ssbUsp from '@/components/ssb-usp.vue'
export default {
  components: {
    ssbUsp
  }
}
</script>

<style lang="scss">
@import './color.scss';
@import url('https://fonts.googleapis.com/css2?family=Chilanka&display=swap');

#app {
  font-family: Verdana,Arial,Ari,'Liberation Sans',FreeSans,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $tuGray;
}
a:link, a:visited{
  color: $tuGreen
}
a:hover {
    color: $tuGray;
    text-decoration: underline;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: $tuGray;

    &.router-link-exact-active {
      color: $tuGreen;
      font-family: 'Chilanka', cursive;
    }
  }
}
</style>
