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
    <section class="container py-5" id="services">
        <div class="row row-cols-1">
            <div class="col d-flex ">
                <div class="ms_hhp">
                    <h6>Our business areas</h6>
                    <h2>Exellence in Services</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus distinctio odio nisi ipsum perferendis nesciunt officiis repudiandae voluptates optio sit expedita in, id aliquam quasi.</p>
                </div>
                <div class="ms_botton-down">
                    <button>SEE ALL</button>
                </div>
            </div>

            <div class="ms_grid col row m-auto">
                <AppGrid v-for="(service, index) in store.services" :key="index" :serviceName="service.name" 
                    :text="service.text" :icon="service.icon" />
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.ms_grid{
    gap: 1rem;
    justify-content: center;

}
</style>