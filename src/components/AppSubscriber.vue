<script>

export default {
    name: "AppSubscriber"
}

</script>

<template>
    <section class="wrapper">
        <div class="container py-5">
            <div class="row py-5">
                <div class="col-6 ms_hhp">
                    <h6>NEWSLETTER</h6>
                    <h2>Know First</h2>
                    <p>Follow closely and receive content about our comany and the news of the current market.</p>
                </div>
    
                <div class="col-6">
                    <form class="d-flex flex-column">
                        <label for="name">Name</label>
                        <input type="text" id="name" placeholder="Name">
    
                        <label for="email">Email</label>
                        <input type="email" id="email" placeholder="Email">
                    </form>
                    <div>
                        <button>SUBSCRIBE</button>
                    </div>
                </div>
            </div>
        </div>
    </section>

</template>

<style lang="scss" scoped>  
.wrapper{
    background-image: url(../assets/img/bg-1.jpg);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    .ms_hhp{
        color: white;
    }

    label{
        display: none;
    }
    input{
        width: 70%;
        margin-bottom: 1rem;
        padding: 0 1rem;
    }
}
    
</style>