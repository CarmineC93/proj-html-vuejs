<script>
import { store } from "../store";

export default {
    
    name: "AppSubscriber",
    data(){
        return{
            store
        }
    },
    methods:{
        addSubscription(){
            let requestUser = {}

            requestUser.nameUser = document.getElementById('name').value;
            requestUser.emailUser = document.getElementById('email').value;

            this.store.newsLetter.push(requestUser);

            console.log(this.store.newsLetter)

            document.getElementById('name').value = "";
            document.getElementById('email').value = "";
        }
    }
}

</script>

<template>
    <section class="wrapper">
        <div class="container py-5">
            <div class="row py-5 px-5">
                <div class="col-lg-5 col-md-12 ms_hhp">
                    <h6>NEWSLETTER</h6>
                    <h2><span class="ms_evidence">Know</span> First</h2>
                    <p>Follow closely and receive content about our company and the news of the current market.</p>
                </div>
    
                <div class="col-lg-7 col-md-12 col-sm-12 px-3 my-5">
                    <form class="d-flex flex-column">
                        <label class="d-none" for="name">Name</label>
                        <input type="text" id="name" value="" placeholder="Name">
    
                        <label class="d-none" for="email">Email</label>
                        <input type="email" id="email" value="" placeholder="Email">
                    </form>
                    <div>
                        <button @click="addSubscription()" class="ms_btn ms_btn_full">SUBSCRIBE</button>
                    </div>
                </div>
            </div>
        </div>
    </section>

</template>

<style lang="scss" scoped>  
@use "../styles/partials/variables.scss" as *;

.wrapper{
    background-image: url(../assets/img/bg-1.jpg);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    .ms_hhp{
        color: white;
    }

    input{
        width: 70%;
        margin-bottom: 1rem;
        background-color: #f1f1f080;
    }
}
    
</style>