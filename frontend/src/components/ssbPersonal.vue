<template>
  <div>
    <div class="shoppingCard">
        <a href="/cartoverview/" class="open go-to-cart-overview">
        <div>
		Winkelwagen
            <span> 
            (1 regel)
            </span>
        </div>
		<span class="mobile-basket" title="Deze winkelwagen wordt gesynchroniseerd met de winkelwagen in de mobiele app."></span>
        <span id="miniCartOrderHeader" title=""></span>
        </a>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
    export default class SsbPersonal extends Vue {
}
</script>


<style scoped lang="scss">
    @import '../color.scss';
div.shoppingCard {
    min-width: 220px;
    left: 1px;
    padding-top: 10px;
    margin-top: 0;
    height: 50px;
    float: right;
    background: url('../assets/winkelwagen-empty.png') 0 0 no-repeat;
        >a>div {
        line-height: .8em;
        font-size: 12px;
        height: 100%;
    }
}

   
</style>