<template>
    <div class="shoppingCard">
        <a href="/cartoverview/" class="open go-to-cart-overview">
        </a>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
    export default class SsbShoppingCard extends Vue {
}
</script>


<style scoped lang="scss">
@import '../../../color.scss';
div.shoppingCard {
    width: 40px;
    left: 1px;
    padding-top: 10px;
    margin-top: 0;
    height: 50px;
    float: left;
    text-align: right;
    top: 14px;
    position: relative;
    background: url('../../../assets/winkelwagen-empty.png') 0 0 no-repeat;
        >a>div {
        line-height: .8em;
        font-size: 12px;
        height: 100%;
    }
}
  
</style>