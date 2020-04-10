<template>
  <div>
    <my-account/>
    <my-favorites/>
    <my-shopping-card/>
  </div>
</template>

<script lang="ts">
import MyShoppingCard from './personal/myShoppingCard.vue'
import MyAccount from './personal/myAccount.vue'
import Myfavorites from './personal/myFavorites.vue'

export default {
    name: 'Ssbpersonal',
    components: {
    'myShoppingCard': MyShoppingCard,
    'myAccount': MyAccount,
    'myFavorites': Myfavorites
    }
}

</script>


<style scoped lang="scss">
@import '../../color.scss';

  
</style>