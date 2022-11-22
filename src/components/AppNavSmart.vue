<script>
export default {
    name: "AppNavSmart",
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
    text-transform: uppercase;
    font-size: 0.9rem;

    a:hover{
        color: $text-color-special;
    }
}

</style>