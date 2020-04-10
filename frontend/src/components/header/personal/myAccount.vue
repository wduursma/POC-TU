<template>
    <div class="myAccount">
        <b-icon-person></b-icon-person>
    </div>
</template>

<script lang="ts">
import { BIconPerson } from 'bootstrap-vue'
    export default {
        name: 'search',
        components: {
            BIconPerson
        }  
}
</script>

<style scoped lang="scss">
@import '../../../color.scss';
.myAccount {
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