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
        <div class="info_banner align-items-center">
            <div class="container">
                <div class="d-flex justify-content-between">
                    <div class="d-flex align-items-center">
                        <p> <i class="fa-solid fa-clock"></i> <span class="ms_cut">Open Hours:</span> Mon-Sat 09:00 - 18:00</p>
                    </div>

                    <div class="contacts d-flex align-items-center">
                        <span>
                            <p><i class="fa-solid fa-phone"></i> +1(305) 1234-5678</p> 
                        </span>
                        <span>
                            <p><i class="fa-solid fa-envelope"></i> hello@example.com</p>
                        </span>
                        <div class="social d-flex"> 
                            <a href=""><i class="fa-brands fa-facebook-f"></i></a>
                            <a href=""><i class="fa-brands fa-twitter"></i></a>
                            <a href=""><i class="fa-brands fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="float_header container p-4">
            <nav class="d-flex justify-content-between align-items-center">

                <div class="logo">
                    <h6><span class="green_space">NEX</span><span>GEN</span></h6>
                </div>
                
                
                <ul>
                    <AppNav v-for="(link, index) in store.pages" :key="index" :pageName="link.name"/>
                </ul>

                <div class="hamburger-menu">
                     <i class="fa-solid fa-bars"></i>            
                </div>

                <a href="" class="ms_btn ms_btn_full ms-3"> GET IN TOUCH</a>
                
            </nav>           
        </div>

        <!-- mobile/tablet menu button -->


    </header>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables.scss" as *;

    header{
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 999;
        p{
            font-size: 0.8rem;
        }
        .info_banner{
            display: flex;
            padding: 0.3rem;
            background-color:$bg-color-header;
            color: $text-color-soft;
            p{        
                margin-bottom: 0rem;
            }
            .contacts{
                gap: 1rem;
                .social{
                    gap: 1rem;
                    i{
                        font-size: 0.7rem;
                    }
                }
            }
        }
        .float_header{
            background-color: rgba(255, 250, 250, 0.305);
            border-radius: 0 0 25px 25px;
            .logo{
                flex-grow: 1;
            }
            ul{
                display: flex;
                margin-bottom: 0;
                gap: 1rem;
            }
            .hamburger-menu{
                display: none;
            }
        }
    }

    // RESPONSIVE
    
    @media screen and (max-width: 767px){
        .ms_cut{
            display: none;
        }
        .float_header{ 
            ul li{
            font-size: 0.7rem;
            }
            .ms_btn{
                padding: 0.3rem 0.2rem;
                border-radius: 4px;
                font-size: 0.5rem;
            }
        }
    }

    @media screen and (max-width: 600px){
        header{
            .info_banner{
                display: none;

            }
            .float_header {
                nav ul {
                display: none;
                }

                .hamburger-menu{
                    display: block;
                }
                .ms_btn{
                    padding: 0.3rem 0.2rem;
                    border-radius: 4px;
                    font-size: 0.5rem;
                }
            }
        }
    }


</style>