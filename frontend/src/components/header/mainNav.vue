<template>
    <nav id="mainnavigation" class="main">
      <ul id="normal-main">
        <li v-for="menu in mainMenus" v-bind:key="menu" class="nav-menu"> 
          <router-link :to="'' +  menu.url">
            {{ menu.name }}  
          </router-link> 
        </li>
      </ul>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component
    export default class MainNav extends Vue {
        data() {
        return {
            mainMenus: [
            { "name": "Webshop", "url": "/webshop" },
            { "name": "Diensten", "url": "/elektrotechniek" },
            { "name": "Nieuws", "url": "/verlichting" }
            ]
        }
        }
    }
</script>


<style scoped lang="scss">
 @import '../../color.scss';

nav.main {
    position: relative;
    margin: 0;
    width: 100%;
    padding-bottom: 10px;
    padding-top: 10px;
    >ul {
    margin-bottom: 0;
    padding: 0px;
      >li {
        border-left: 1px solid $tuGreen;
        height: 22px;
        text-align: center;
        margin-top: 12px;
        margin-bottom: 6px;
        list-style: none;
        float: left;
      a {
        position: absolute;
        top: 10px;
        color: $tuGreen;
        display: block;
        font-family: Arial;
        font-size: 1em;
        padding: 10px 4px 8px;
      }
      
    }
    >li:last-child {
        border-right: 1px solid $tuGreen;
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
        padding-right: 2px;
        padding-left: 2px;
        a {
          position: relative;
          top: -9px;
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

</style>