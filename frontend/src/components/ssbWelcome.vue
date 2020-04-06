<template>
    <div class="welcome">
        <ul>
            <li class="welcomePersonal">
                <section>
                    <div class="personal-details name-details">
                        Welkom<span> {{ lastName }}</span>
                    </div>
                    <div class="personal-details org-details">
                        {{ company }}
                    </div>
                    <div class="personal-details org-number">
                        klant <span> {{ customer }}</span>
                    </div>
                </section>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
export default  {
    name: 'SsbWelcome',
    data() {
        return {
        lastName: 'Duursma',
        company: 'Technischeunie',
        customer: '1614499' 
        }
    }

}
</script>


<style scoped lang="scss">
@import '../color.scss';
.welcome ul {
    li {
        padding-right: 5px;
        margin: -14px 0 0 5px;
        color: #333;
        max-width: 220px;
        max-height: 36px;
        border-right: 1px solid #e3dfdb;
        font-size: 11.2px;
    }    
    li.welcomePersonal {
        padding-right: 10px;
        margin: -4px 0 0 5px;
        overflow: hidden;
        text-align: right;
        letter-spacing: -1px;
        line-height: 1.1;
        color: $tuGray;
        max-width: 220px;
        max-height: 40px;
        float: left;
        .personal-details {
            overflow: hidden;
            white-space: nowrap;
            
        }
        .org-details {
                text-transform: uppercase;
        }
    }
}

    
</style>