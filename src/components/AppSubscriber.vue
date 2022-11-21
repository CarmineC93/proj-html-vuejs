<script>

export default {
    name: "AppSubscriber"
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
                        <input type="text" id="name" placeholder="Name">
    
                        <label class="d-none" for="email">Email</label>
                        <input type="email" id="email" placeholder="Email">
                    </form>
                    <div>
                        <button class="ms_btn ms_btn_full">SUBSCRIBE</button>
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
    }
}
    
</style>