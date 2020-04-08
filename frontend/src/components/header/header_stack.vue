<template>
<div id="header" class="headercontainer">
  <div class="row">
    <div class="col-sm-12 appHeader">
        <!-- logo -->
          <logo/>
        <div class="col-sm-8 headerRight">
           
            <!-- main menu -->
            <!-- Search --> 
            <!-- personal menu -->
            <ssbpersonal/>
        </div>
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
import SsbPersonal from './../ssbPersonal.vue'
import HeaderNav from './../headerNav.vue'
export default {
      name: 'appHeader',
     
      components: {
        'logo': Logo,
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
