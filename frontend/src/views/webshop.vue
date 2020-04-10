<template>
  <div id="webshop">
    <div id="navigation">
      <navigation/>
    </div>
    <h1>Webshop</h1>
  </div>
</template>

<script lang="ts">
import Nav from './../components/menu/nav.vue'

export default  {
    name: 'Webshop',
    components: {
      'navigation': Nav
    }
}
</script>

<style scoped lang="scss">
 @import '../color.scss';
#navigation {
     border-bottom: 1px solid $tuWhiteGray;
}

</style>
