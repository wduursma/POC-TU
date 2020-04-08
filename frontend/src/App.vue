<template>
  <div id="app">
    <stackUsp/>
    <appBody/>
    <router-view/>
  
  </div>
</template>

<script>
import StackUsp from '@/components/usp/stack_usp.vue'
import appBody from '@/components/appBody.vue'

export default {
  components: {
    'stackUsp': StackUsp,
    appBody,
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

@media (min-width: 1200px){
.container, .container-sm, .container-md, .container-lg, .container-xl {
    max-width: 960px !Important;
  } 
}


</style>
