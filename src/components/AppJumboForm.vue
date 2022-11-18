<script>

export default {
    name: "AppJumboForm",
}

</script>

<template>
    <div class="jumbo">
        <div class="container d-flex justify-content-end">
            <div class="get_in_touch d-flex flex-column align-items-start " >
                <h5>FUSIONS & ACQUISITION</h5>
                <h1>Insurance Consulting</h1>
                <form class="d-flex row row-cols-2">
                    <label for="name">name</label>
                    <input class="col" type="text" id="name" placeholder="Name">
    
                    <label for="email">name</label>
                    <input class="col" type="email" id="email" placeholder="Email">
                
                    <label for="phone ">name</label>
                    <input class="col g-1" type="tel" id="phone" placeholder="Phone">
    
                    <label for="more">name</label>
                    <select class="col g-1 gy-1" name="more" id="more">
                        <option value="More Info">More Info</option>
                        <option value="About">About us</option>
                        <option value="Services">Services</option>
                        <option value="Process">Process</option>
                        <option value="Contracts">Contracts</option>
                    </select>
    
                    <div class="col d-flex flex-grow-1">
                        <button> GET IN TOUCH</button>
                        <button> READ MORE</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.jumbo{
    padding-top: 10rem;
    background-image: url(../assets/img/bg-6.jpg);
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;

    // debug
    height: 700px;
    .get_in_touch{
        width: 35%;
        justify-content: flex-end;

        form{
            width: 300px;
        }

        label{
            display: none;
        }

        input, select{
            width: 45%;
            margin: 0.5rem 0 0 11px;
        }
        
        button{
            margin-right: 0.5rem;
            margin-top: 0.5rem;
        }
    }
    
}

</style>