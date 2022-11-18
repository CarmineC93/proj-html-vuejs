<script>

export default{
    name : "AppArticle",
    props: {
        item : Object,
    },
    methods : {
        getImageUrl(imagePath){
            return new URL(imagePath, import.meta.url).href;
        },
    }
}
</script>

<template>
    <span v-if="item.active">
        <img :src="getImageUrl(`${item.img}`)" :alt="`${item.title}`">
        <h4>{{item.title}}</h4>
    </span> 
</template>

<style lang="scss" scoped>
span{
    position: relative;
    img{
        filter:brightness(0.5);
        border-radius: 10px;

    }
    h4{
        position: absolute;
        bottom: 10px;
        left: 1rem;
        color: white;
        font-size: 1.4rem;
        text-align: center;
        padding: 1rem;
    }
}
</style>