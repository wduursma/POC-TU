<template>
    <form>
        <div class="form-group">
            <b-icon-search class="form-control-icon"></b-icon-search>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="ik zoek een product">
        </div>
    </form>
</template>

<script lang="ts">
import { BIconSearch } from 'bootstrap-vue'
    export default {
        name: 'search',
        components: {
            BIconSearch
        }  
}
</script>

<style scoped lang="scss">
@import '../../color.scss';

.search {
    .form-group { 
        margin-top: 20px;
    }
}
.form-group {
    .form-control {
        padding-left: 0.5rem;
        height: 30px;
        font-size: 12px;     
    }
    .form-control::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
            color: $tuGray;
            opacity: 0.5; /* Firefox */
        }
    .form-control-icon {
        position: absolute;
        z-index: 2;
        display: block;
        top: 27px;
        right: 20px;
        width: 1.2rem;
        height: 1.2rem;
        line-height: 2.375rem;
        text-align: center;
        pointer-events: none;
        color: #aaa;
        float: right;
    }
}
  
</style>