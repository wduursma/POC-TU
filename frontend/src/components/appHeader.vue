<template>
  <div  id="header" class="col-sm-12 appHeader">
            <div class="col-sm-4 companyLogo headerLeft">
              <img alt="Technischeunie logo" src="../assets/logo.png">
            </div>
            <div class="col-sm-8 headerRight">
               <ssbpersonal/>
            </div>
        </div>
</template>

<script lang="ts">
//import { Component, Vue } from 'vue-property-decorator';
import SsbPersonal from './ssbPersonal.vue'
    export default {
      name: 'appHeader',
     
      components: {
        'ssbpersonal': SsbPersonal
      }
}
</script>


<style scoped lang="scss">
 @import '../color.scss';
.appHeader {
  .headerLeft {
    float: left;
    padding-left: 0;
  }
  .headerRight {
    float: right;
    padding-right: 0;
  }
  .companyLogo {
        text-align: left;
        img{
          width: 233px;
          height: 43px;
          margin: 10px 0;
        }
  }
}

   
</style>
