<script>

export default {
    name: "AppJumboForm",
}

</script>

<template>
    <div class="jumbo">
        <div class="container">
            <div class="get_in_touch flex column">
                <h5>FUSIONS & ACQUISITION</h5>
                <h1>Insurance Consulting</h1>
                <form class="flex">
                    <label for="name">name</label>
                    <input type="text" id="name" placeholder="Name">
    
                    <label for="email">name</label>
                    <input type="email" id="email" placeholder="Email">
    
                    <label for="phone">name</label>
                    <input type="number" id="phone" placeholder="Phone">
    
                    <label for="more">name</label>
                    <select name="more" id="more">
                        <option value="More Info">More Info</option>
                        <option value="About">About us</option>
                        <option value="Services">Services</option>
                        <option value="Process">Process</option>
                        <option value="Contracts">Contracts</option>
                    </select>
    
                    <div>
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
    height: 600px;
    .get_in_touch{
        align-items: flex-end;

        form{
            width: 100px;
        }

        label{
            display: none;
        }
    }
    
}

</style>