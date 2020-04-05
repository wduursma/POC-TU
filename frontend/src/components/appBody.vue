<template>
  <div  id="top" class="">
    <div class="container body">
      
                <appheader/>

    </div>
  </div>
</template>

<script lang="ts">
import AppHeader from './appHeader.vue'

export default {
  name: 'appBody',
  components: {
    'appheader': AppHeader
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
