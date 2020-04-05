<template>
    <nav id="mainnavigation" class="main">
    <div class="nav-divider"></div>
      <ul id="normal-main">
        <li class="nav-home current">
          <a href="/landingpage/" title="Home">
            <span class="home desktop-only">&nbsp;</span>
          </a>
        </li>
      </ul>
    <div class="nav-divider"></div>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
    export default class HeaderNav extends Vue {
}
</script>


<style scoped lang="scss">
 @import '../color.scss';

nav.main {
    position: relative;
    margin: 0;
    width: 960px;
    padding-bottom: 10px;
    padding-top: 10px;
    >ul {
    margin-bottom: 0;
    padding: 0px;
      >li {
      min-height: 29px;
      text-align: center;
      margin-top: 6px;
      margin-bottom: 6px;
      list-style: none;
      a {
        position: absolute;
        top: 10px;
        height: 23px;
        width: 45px;
        color: $tuGreen;
        display: block;
        font-family: Arial;
        font-size: 1.35em;
        padding: 10px 4px 8px;
      }
      
    }
  }
}
.nav-home {
    min-width: 48px;
    margin-left: 2px;
    width: 50px;
}
nav.main>ul>li.current {
    border-color: $tuGreen;
    border-style: solid;
    border-top: 0px;
    border-bottom: 0px;
    border-left-width: 1px;
    border-right-width: 1px;
}
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

ul>li>a span.home {
    padding: 0 5px 0 8px;
    background: url('../assets/home.png') 0 0px no-repeat;
}
</style>