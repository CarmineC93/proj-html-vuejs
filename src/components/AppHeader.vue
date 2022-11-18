<script>
import {store} from "../store";
import AppNav from "./AppNav.vue"

export default {
    name: "AppHeader",
    components:{
      AppNav  
    },
    data(){
        return{
            store
        }
    }
}

</script>

<template>
    <header>
        <div class="contacts">
            <div class="container">
                <div class="d-flex justify-content-between">
                    <div>
                        <p>Orari di apertura</p>
                    </div>

                    <div class="d-flex ">
                        <p>telefono</p>
                        <p>mail</p>
                        <div>social icon</div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="container">
            <nav class="d-flex justify-content-between">

                <div class="logo">
                    <img src="../assets/img/logo_48.png" alt="logo">
                </div>

                <div class="d-flex">
                    <AppNav v-for="(link, index) in store.pages" :key="index" :pageName="link.name"/>

                    <button> GET IN TOUCH</button>
                </div>
            </nav>           
        </div>
    </header>
</template>

<style lang="scss" scoped>

    header{
        position: fixed;
        top: 0;
        left: 0;
        z-index: 999;
        width: 100%;
        .contacts{
            background-color: black;
            height: 30px;
            color: white;
        }
        .container{
            height: 100px;
        }
    }
</style>