<template>
<div class="container">
    <nav id="mainnavigation" class="row main">
      <ul id="normal-main">
        <li v-for="menu in menus" v-bind:key="menu" class="nav-menu"> 
          <router-link :to="'' +  menu.url">
            {{ menu.name }}
          </router-link>
        </li>
      </ul>
    </nav>
</div>
</template>

<script lang="ts">
export default {
  props: ['menus'],
  data() {
    return {

      }
  },
  name: 'navigation'
}

</script>


<style scoped lang="scss">
 @import '../../color.scss';
#webshop {
    .container {
        padding: 0;
    }
}
nav.main {
    position: relative;
    margin: 0;
    width: 100%;
    >ul {
    margin-bottom: 0;
    padding: 0px;
      >li {
      min-height: 29px;
      text-align: center;
      margin-top: 6px;
      margin-bottom: 6px;
      list-style: none;
      float: left;
      a {
        position: absolute;
        top: 10px;
        height: 23px;
        width: 45px;
        color: $tuGreen;
        display: block;
        font-family: Arial;
        font-size: 1em;
        padding: 10px 4px 8px;
      }
    }
    li.current {
        border-color: $tuGreen;
        border-style: solid;
        border-top: 0px;
        border-bottom: 0px;
        border-left-width: 1px;
        border-right-width: 1px;
    }
    li.nav-menu {
        padding-right: 20px;
        a {
          position: relative;
          top: -7px;
          height: 23px;
          width: 100%;
          color: $tuGrayMenu;
          display: block;
          font-family: Arial;
          font-size: 0.9em;
          padding: 10px 3px 8px 4px;
      }
      a:hover {
        text-decoration: none;
      }
    }
  }
}
.nav-home {
    min-width: 48px;
    margin-left: 2px;
    width: 50px;
}
nav.main>ul>li.currentx {
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


</style>