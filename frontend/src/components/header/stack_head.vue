<template>
<div  id="head">
  <div class="container head stack_header">
      <div class="row appHeader">
        <div class="col-sm-3 ">
            <!-- logo -->
            <logo/>
        </div>
        <div class="col-sm-3 ">
          <!-- main menu -->
            <mainNav/>
        </div>
        <div class="col-sm-4 search">
          <!-- search -->
          <search/>
        </div> 
        <div class="col-sm-2 ">
          <!-- personal menu -->
            <ssbpersonal/>
        </div>   
      </div>
  </div>
</div>
</template>

<script lang="ts">
import Logo from './logo.vue'
import MainNav from './mainNav.vue'
import Search from './search.vue'
import SsbPersonal from './stack_personal.vue'

export default {
      name: 'appHeader',
     
      components: {
        'logo': Logo,
        'mainNav': MainNav,
        'search': Search,
        'ssbpersonal': SsbPersonal
      }
}
</script>


<style scoped lang="scss">
 @import '../../color.scss';
 #head {
   margin-top: 5px;
   margin-bottom: 5px;
  border-bottom: 1px solid $tuWhiteGray;
  -moz-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
    -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
}

 .head {
  padding-right: 0px;
  padding-left: 0px;
}
.appHeader {

  .headerRight {
    float: right;
    padding-right: 0;
  }
  
}
</style>
