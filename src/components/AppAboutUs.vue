<script>

export default {
    name: "AppAboutUs"
}

</script>

<template>
    <section>
        <section class="container py-5" id="about">
            <div class="row row-cols-2  row-cols-lg-2 row-cols-md-1  py-5">
                <div class="col ms_hhp">
                    <h6>About the network</h6>
                    <h2> <span class="ms_evidence">The</span>  Company</h2>
                    <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit, amet consectetur elit non sit adipisicing. Officia, non dolor sit amet.
                        Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet benedictes.
                    </p>
                        <br>
                    <p>Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet. Lorem ipsum elit sit consectetur.</p> 
                    
                </div>
                <div class="col row row-cols-2 ">
                    <div class="item col p-2">
                        <i class="fa-solid fa-award"></i>
                        <h4>Tradition</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                    <div class="item col p-2">
                        <i class="fa-solid fa-lock"></i>                        
                        <h4>Security</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                    <div class="item col p-2">
                        <i class="fa-regular fa-pen-to-square"></i>
                        <h4>Certificate</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                    <div class="item col p-2">
                        <i class="fa-solid fa-graduation-cap"></i>
                        <h4>Expertise</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                </div>
            </div>
        </section>
    </section>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables.scss" as *;

section{
    background-color: $bg-color;
    color: $text-color;
    p{
        color: $text-color-soft;
    }
    .row .col:first-child{
        padding-right:2rem
    }
    i{
        color: $text-color-special;
        font-size: 1.5rem;
    }
    h4{
        display: inline-block;
        margin: 1rem 0.5rem;
    }
}

// RESPONSIVE

@media screen and (max-width: 767px){
    .row{
        .col{
            .item h4{ 
                font-size: 1rem;
            }
        }
    }
}


</style>