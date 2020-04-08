<template>
    <div class="col-sm-4 companyLogo headerLeft">
        <router-link to="/">
        <img alt="Technischeunie logo" src="../../assets/logo.png">
        </router-link>
    </div>
</template>

<script lang="ts">
    export default {
        name: 'logo' 
     
}
</script>

<style scoped lang="scss">
@import '../../color.scss';
.headerLeft {
    float: left;
    padding-left: 0;
  }
.companyLogo {
        text-align: left;
        img{
          width: 233px;
          height: 43px;
          margin: 10px 0;
        }
  }
  
</style>