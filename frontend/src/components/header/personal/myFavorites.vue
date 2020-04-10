<template>
    <div class="myfavorites">
        <b-icon-star></b-icon-star>
    </div>
</template>

<script lang="ts">
import { BIconStar } from 'bootstrap-vue'
    export default {
        name: 'favorites',
        components: {
            BIconStar
        }  
}
</script>

<style scoped lang="scss">
@import '../../../color.scss';
.myfavorites {
    float: left;
    top: 20px;
    position: relative;
    margin-right: 10px;
  .b-icon.bi {
    font-size: 28px;
    color: $tuGreen;
    }
}
</style>