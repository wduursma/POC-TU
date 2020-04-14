<template>
  <div id="webshop">
    <div id="navigation">
      <navigation v-bind:menus="menus"></navigation>
    </div>
    <h1>Webshop</h1>
  </div>
</template>

<script lang="ts">
import Nav from './../components/menu/nav.vue'

export default  {
  data() {
    return {
      menus: [
        { "name": "Draad & Kabel", "url": "/draad-kabel" },
        { "name": "Elektrotechniek", "url": "/elektrotechniek" },
        { "name": "Verlichting", "url": "/verlichting" },
        { "name": "Duurzaamheid", "url": "/thema" },
        { "name": "Leidingsystemen", "url": "/leidingsystemen" },
        { "name": "Sanitair", "url": "/sanitair" },
        { "name": "Gereedschap", "url": "/gereedschap" },
        { "name": "PBM", "url": "/pbm" },
        { "name": "Bruin/witgoed", "url": "/bruin-witgoed" }
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
