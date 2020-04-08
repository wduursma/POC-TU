<template>
  <div  id="top" class="">
    <div class="container body">
      
                <appheader/>
                <search/>

    </div>
  </div>
</template>

<script lang="ts">
import AppHeader from './header/header_stack.vue'
import AppSearch from './appSearch.vue'

export default {
  name: 'appBody',
  components: {
    'appheader': AppHeader,
    'search':  AppSearch
  }
}

  

</script>


<style scoped lang="scss">
    @import '../color.scss';
.body {
  padding-right: 0px;
  padding-left: 0px;
}
</style>
