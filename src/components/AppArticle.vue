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
    <span v-if="item.active" class="py-md-3 py-sm-3">
        <img :src="getImageUrl(`${item.img}`)" :alt="`${item.title}`">
        <h3>{{item.title}}</h3>
    </span> 
</template>

<style lang="scss" scoped>
span{
    position: relative;
    img{
        filter:brightness(0.5);
        border-radius: 10px;
    }
    &:hover img{
    filter:brightness(0.7);
    }
    h3{
        position: absolute;
        bottom: 10px;
        left: 1rem;
        color: white;
        font-size: 1.8rem;
        text-align: center;
        padding: 1rem;
    }
}

//RESPONSIVE

@media screen and (max-width: 1040px){
    span{
        h3{
            font-size: 1.5rem;
        }
    }
}

</style>