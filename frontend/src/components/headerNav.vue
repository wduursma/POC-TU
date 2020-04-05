<template>
  <div>
    <div class="nav-divider"></div>
    Nav
    <div class="nav-divider"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
    export default class HeaderNav extends Vue {
}
</script>


<style scoped lang="scss">
 @import '../color.scss';
 div.nav-divider {
    float: left;
    height: 1px;
    width: 100%;
    background: $tuGreen;
    background: -webkit-linear-gradient(left,$tuGreen,$tuGreenLight);
    background: -o-linear-gradient(right,$tuGreen,$tuGreenLight);
    background: -moz-linear-gradient(right,$tuGreen,$tuGreenLight);
    background: linear-gradient(to right,$tuGreen,$tuGreenLight);
}
</style>