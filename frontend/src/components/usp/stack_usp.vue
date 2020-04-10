<template>
  <div  id="usp-header" class="ssb_blok">
    <div class="container">
        <div class="row">
            <div class="col-sm-4">
                <serviceline/>
            </div>
            <div class="col-sm-4">
                700 merken  37 vestigingen
            </div>
            <div class="col-sm-2">
                <service/>
            </div>
            <div class="col-sm-2">
                <customer/>
            </div>
        </div>
    </div>
  </div>
</template>

<script lang="ts">
import CustomerService from './customerService.vue'
import ServiceLine from './serviceLine.vue'
import CustomerInfo from './customerInfo.vue' 

export default  {
    name: 'stackUsp',
    components: {
       'service':  CustomerService, 
       'serviceline': ServiceLine,
       'customer': CustomerInfo
    }
}
</script>


<style scoped lang="scss">
@import '../../color.scss';

div#usp-header {
    min-height: 31px;
    line-height: 31px;
    margin: 5px auto;
    overflow: hidden;
    z-index: 999;
    position: relative;
    font-size: 11.2px;
    a {
        color: $tuGray;
    }
    a:hover {
      color: $tuGray;
      text-decoration: none;
    }
    .usp_line {
        text-align: left;
        word-wrap: normal;
        white-space: nowrap;
        display: inline-block;
        font-family: 'Chilanka', cursive;
        color: $tuGrayLight;
        font-style: italic;
    }
    
}
   
</style>
