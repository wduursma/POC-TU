<template>
  <div id="app">
    <stack-usp/>
    <stack-header/>
    <router-view/>
  
  </div>
</template>

<script>
import StackUsp from '@/components/usp/stack_usp.vue'
import StackHeader from '@/components/header/stack_head.vue' 

export default {
  components: {
    'StackUsp': StackUsp,
    'StackHeader': StackHeader
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
