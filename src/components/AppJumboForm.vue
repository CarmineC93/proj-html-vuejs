<script>

export default {
    name: "AppJumboForm",
}

</script>

<template>
    <section class="jumbo" id="home">
        <div class="container d-flex justify-content-end">
            <div class="get_in_touch d-flex flex-column align-items-start " >
                <h6>FUSIONS & ACQUISITION</h6>
                <h1>Insurance Consulting</h1>
                <form class="d-flex row row-cols-2">
                    <label class="d-none" for="name">name</label>
                    <input class="col" type="text" id="name" placeholder="Name">
    
                    <label class="d-none" for="email">email</label>
                    <input class="col" type="email" id="email" placeholder="Email">
                
                    <label class="d-none" for="phone">phone</label>
                    <input class="col" type="tel" id="phone" pattern="[0-9]{9-11}" placeholder="Phone">
    
                    <label class="d-none" for="more">more</label>
                    <select class="col" name="more" id="more">
                        <option value="More Info">More Info</option>
                        <option value="About">About us</option>
                        <option value="Services">Services</option>
                        <option value="Process">Process</option>
                        <option value="Contracts">Contracts</option>
                    </select>
    
                    <div class="col d-flex flex-grow-1">
                        <a href="" class="ms_btn ms_btn_full"> GET IN TOUCH</a>
                        <a href="" class="ms_btn ms_btn_void"> READ MORE</a>
                    </div>
                </form>
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

    .get_in_touch{
        width: 35%;
        margin-top: 3rem;
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

</style>