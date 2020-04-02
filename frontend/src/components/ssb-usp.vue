<template>
  <div  id="usp-header" class="ssb_blok">
    <div class="container">
        <div class="row">
            <div class="col-sm-6 usp_line">
                Voor 20.00u besteld, morgen geleverd* Snelle levering op uw werkplek
            </div>
            <div class="col-sm-6 customerservice">
                <a href="/klantenservice/" class="icon icon-customerservice">Klantenservice</a>
            </div>
        </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Ssb extends Vue {
  
}
</script>


<style scoped lang="scss">
div#usp-header {
    border-bottom: 1px solid #ededed;
    min-height: 31px;
    line-height: 31px;
    margin: 0 auto;
    overflow: hidden;
    z-index: 999;
    position: relative;
    font-size: 12px;
    a:hover {
      color: #333;
      text-decoration: none;
    }
    .usp_line {
        word-wrap: normal;
        white-space: nowrap;
        display: inline-block;
        font-family: 'Chilanka', cursive;
        color: #9d9d9d;
        font-style: italic;
    }
    .customerservice  {
        padding-left: 23px;
        background-position: 2% 28%;
        width: 98px;
        font-family: Verdana;
        text-align: center;
        vertical-align: middle;
        font-style: normal;
    }
}

    
</style>
