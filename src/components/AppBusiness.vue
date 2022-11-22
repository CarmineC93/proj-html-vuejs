<script>
import {store} from "../store";
import AppGrid from "./AppGrid.vue";

export default{
    name : "AppBusiness",
    components:{
        AppGrid,
    },  
    data(){
        return{
            store,
        }
    }
}

</script>

<template>
    <section class="py-5" id="services"> 
        <div class="container py-5">    
            <div class="row row-cols-1">
                <div class="col d-flex justify-content-between">
                    <div class="ms_hhp">
                        <h6>Our business areas</h6>
                        <h2>Excellence in <span class="ms_evidence_light">Services</span></h2>
                        <p>We are leaders in providing consultancy services with a set of cutting-edge technologies and a team of experienced and renowned professionals. These are some options that you can hire.</p>
                    </div>
                    <div class="ms_botton-down">
                        <a href="" class="ms_btn ms_btn_full">SEE ALL</a>
                    </div>
                </div>

                <div class="ms_grid col row row-cols-lg-1 row-cols-md-1 row-cols-md-1 m-auto mt-4 mb-5">
                    <AppGrid v-for="(service, index) in store.services" :key="index" :serviceName="service.name" 
                        :text="service.text" :icon="service.icon" />
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables.scss" as *;

#services{
    background-color: $bg-color-services;
}
.ms_hhp{
    width: 80%;
}
.ms_grid{
    gap: 2rem;
    justify-content: space-between;
}

// RESPONSIVE

@media screen and (max-width: 1250px){
    #services{
        .ms_grid{
            gap: 0.8rem;
        }
    }
}

@media screen and (max-width: 567px){
    #services{
        .ms_grid{
            gap: 0.8rem;
            display: block;

            .col{
                width: 100%;
                padding: 0.5rem;
                margin-top: 1rem;
            }
            }
        }
}
</style>