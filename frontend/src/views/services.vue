<template>
  <div id="webshop">
    <div id="navigation">
      <navigation v-bind:menus="menus"></navigation>
    </div>
    <h1>Diensten</h1>
  </div>
</template>

<script lang="ts">
import Nav from './../components/menu/nav.vue'

export default  {
  data() {
    return {
      menus: [
        { "name": "Levermogenlijkheden", "url": "/draad-kabel" },
        { "name": "Online diensten", "url": "/elektrotechniek" },
        { "name": "Koppelingen ERP & BIM", "url": "/verlichting" },
        { "name": "Showrooms", "url": "/thema" },
        { "name": "Opleidingen en Trainingen", "url": "/leidingsystemen" }
          ]
      }
  },
    name: 'Webshop',
    components: {
      'navigation': Nav
    }
}
</script>

<style scoped lang="scss">
 @import '../color.scss';
#navigation {
     border-bottom: 1px solid $tuWhiteGray;
}

</style>
