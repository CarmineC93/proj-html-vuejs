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
            <li> {{pageName}} </li>
        </ul>
</template>

<style lang="scss" scoped>
 
li{
    list-style-type: none;
    
}

</style>