<template>
  <div>
    <welcome/>
    <account/>
    <basket/>
    <shoppingCard/>
  </div>
</template>

<script lang="ts">
import SsbShoppingCard from './ssbShoppingCard.vue'
import SsbWelcome from './ssbWelcome.vue'
import SsbPersonalAccount from './ssbPersonalAccount.vue'
import SsbMuliShoppingBasket from  './ssbMultiShoppingBasket.vue' 

export default {
    name: 'Ssbpersonal',
    components: {
    'shoppingCard': SsbShoppingCard,
    'welcome' : SsbWelcome,
    'account' : SsbPersonalAccount, 
    'basket' : SsbMuliShoppingBasket
    }
}

</script>


<style scoped lang="scss">
@import '../color.scss';

  
</style>