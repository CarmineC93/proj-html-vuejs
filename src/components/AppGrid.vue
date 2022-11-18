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
        <div class="col-3 col p-4">
            <div class="d-flex justify-content-between">
                <span> {{icon}} </span>  
                <a href=""> icona arrow </a>
            </div>
            <div>
                <h4>{{serviceName}}</h4>
                <p>{{text}}</p>
            </div>

        </div>
</template>

<style lang="scss" scoped>
.col{
    background-color: white;
    color: black;
    border-radius: 10px;
    width: 30%
}
</style>