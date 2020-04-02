<template>
  <div id="app">
    <ssb/>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> | 
      <router-link to="/assortment-overview">Assortment</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import ssb from '@/components/ssb.vue'
export default {
  components: {
    ssb
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Chilanka&display=swap');

#app {
  font-family: Verdana,Arial,Ari,'Liberation Sans',FreeSans,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
a:link, a:visited {
  color: #00792c;
}
a:hover, a:active {
  color: #333;
  text-decoration: none;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #3d4942;

    &.router-link-exact-active {
      color: #00792c;
      font-family: 'Chilanka', cursive;
    }
  }
}
</style>
