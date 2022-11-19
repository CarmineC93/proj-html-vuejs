<script>
export default {
    name: "AppNav",
    props: {
        pageName: String,
    }
}

</script>

<template>
            <li> <a :href="`#${pageName}`" >{{pageName}}</a> </li> 
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables.scss" as *;

li{
    list-style-type: none;
    text-transform: uppercase;
    font-size: 0.9rem;

    a:hover{
        color: $text-color-special;
    }
}

</style>