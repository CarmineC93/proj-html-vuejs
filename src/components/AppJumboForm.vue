<script>
import { store } from "../store";

export default {
    name: "AppJumboForm",
    data(){
        return{
            store
        }
    },
    methods: {
        getInTouch() {
            let requestUser = {}

            requestUser.nameUser = document.getElementById('name').value;
            requestUser.emailUser = document.getElementById('email').value;
            requestUser.phoneUser = document.getElementById('phone').value;
            requestUser.optionUser = document.getElementById('more').value;

            this.store.requestes.push(requestUser);

            console.log(this.store.requestes)

            document.getElementById('name').value = "";
            document.getElementById('email').value = "";
            document.getElementById('phone').value = "";
            document.getElementById('more').value = "More Info";
        }
    }
}

</script>

<template>
    <section class="jumbo" id="home">
        <div class="container d-flex">
            <div class="get_in_touch d-flex flex-column align-items-start " >
                <h6>FUSIONS & ACQUISITION</h6>
                <h1>Insurance Consulting</h1>
                <div class="d-flex row row-cols-2">
                    <label class="d-none" for="name">name</label>
                    <input class="col" type="text" value="" id="name" placeholder="Name">
    
                    <label class="d-none" for="email">email</label>
                    <input class="col" type="email" value="" id="email" placeholder="Email">
                
                    <label class="d-none" for="phone">phone</label>
                    <input class="col" type="tel" value="" id="phone" pattern="[0-9]{9-11}" placeholder="Phone">
    
                    <label class="d-none" for="more">more</label>
                    <select class="col" name="more" id="more">
                        <option value="More Info">More Info</option>
                        <option value="About">About us</option>
                        <option value="Services">Services</option>
                        <option value="Process">Process</option>
                        <option value="Contracts">Contracts</option>
                    </select>
    
                    <div class="col d-flex flex-grow-1">
                        <button class="ms_btn ms_btn_full" @click="getInTouch()"> GET IN TOUCH</button>
                        <a href="" class="ms_btn ms_btn_void"> READ MORE</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables.scss" as *;
.jumbo{
    padding: 10rem 0;
    background-image: url(../assets/img/bg-6.jpg);
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    .container{
        justify-content:flex-end;
        .get_in_touch{
            width: 35%;
            margin-top: 3rem;
            h1{
                font-size: 3.8rem;
                font-weight: 900;
            }
            h6{
                font-size: 0.9rem;
                color: $text-color-special;
            }
            input, select{
                width: 45%;
                margin: 0.5rem 0 0 10px;
            }
            
            button, a{
                margin: 0.7rem 0.7rem 0 0;
            }
        }
    }
}

// RESPONSIVE

@media screen and (max-width: 900px){
    .jumbo .container{
        background-color: rgba(255, 255, 255, 0.492) ;
        border-radius: 10px;
        padding: 1rem;
        justify-content:center;
        .get_in_touch{
            width: 80%;
            h1{
            font-size: 2.8rem;
            }
        }
    }
}

@media screen and (max-width: 500px){
    .jumbo .container{
        justify-content:flex-start;
        .get_in_touch{
            width: 100%;
            h1{
             font-size: 2.8rem;
            }
        }
    }
}

</style>