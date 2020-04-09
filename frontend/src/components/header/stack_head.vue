<template>
<div id="header" class="stack_header">
  <div class="row appHeader">
    <div class="col-sm-3 ">
        <!-- logo -->
        <logo/>
    </div>
    <div class="col-sm-3 ">
      <!-- main menu -->
        <mainNav/>
    </div>
    <div class="col-sm-3 ">
      <!-- search -->
      <search/>
    </div> 
    <div class="col-sm-3 ">
      <!-- personal menu -->
        <ssbpersonal/>
    </div>   
  </div>
  <div class="row">
    <div class="col-sm-12">
        <!-- nav -->
        <headernav/>
    </div>
  </div>
</div>
</template>

<script lang="ts">
import Logo from './logo.vue'
import MainNav from './mainNav.vue'
import Search from './search.vue'
import SsbPersonal from './../ssbPersonal.vue'
import HeaderNav from './../headerNav.vue'
export default {
      name: 'appHeader',
     
      components: {
        'logo': Logo,
        'mainNav': MainNav,
        'search': Search,
        'ssbpersonal': SsbPersonal,
        'headernav': HeaderNav
      }
}
</script>


<style scoped lang="scss">
 @import '../../color.scss';
.appHeader {

  .headerRight {
    float: right;
    padding-right: 0;
  }
  
}

   
</style>
