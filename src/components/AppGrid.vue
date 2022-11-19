<script>
export default{
    name: "AppGrid",
    props: {
        serviceName: String,
        icon: String,
        text: String
    }
}
</script>

<template>
        <div class="col-3 col">
            <div class="ms_icons d-flex justify-content-between py-3">
                <i :class="icon"></i>  
                <a href=""> <i class="fa-solid fa-arrow-right"></i></a>
            </div>
            <div >
                <h4 class="py-3"><strong>{{serviceName}}</strong></h4>
                <p>{{text}}</p>
            </div>

        </div>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables.scss" as *;
p{
    color: $text-color-grey;
}
.col{
    background-color: white;
    color: black;
    border-radius: 10px;
    width: 31%;     
    padding: 1.5rem;   
    .ms_icons i{
        color:$text-color-special;
        font-size: 1.8rem;
    }
    
    .ms_icons a {
        cursor: pointer;
        i{
            color:$bg-soft-green;
            font-size: 1.5rem;
        }
        i:hover{
            color:red;
        }
    }
}
</style>