<template>
    <div class="usp_line">
        {{ oneliner }}
    </div>
</template>

<script lang="ts">
export default {
  name: 'ServiceLine',
  data() {
      return {
          oneliner: 'Voor 20.00u besteld volgende dag op uw werkplek geleverd.'
      }
  }
}
</script>


<style scoped lang="scss">
@import '../../color.scss';

.usp_line {
        text-align: left;
        word-wrap: normal;
        white-space: nowrap;
        display: inline-block;
        font-family: 'Chilanka', cursive;
        color: $tuGrayLight;
        font-style: italic;
    }

</style>