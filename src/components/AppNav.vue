<script>

export default {
    name: "AppNav",
    props: {
        pageName: String,
    }
}

</script>

<template>
        <ul>
            <li> <a :href="`#${pageName}`" >{{pageName}}</a> </li>
        </ul>
</template>

<style lang="scss" scoped>
 
li{
    list-style-type: none;
    
}

</style>