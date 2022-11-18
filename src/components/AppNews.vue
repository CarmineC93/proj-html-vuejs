<script>
import {store} from "../store"
import AppArticle from "./AppArticle.vue"

export default{
    name : "AppNews",
    components :{
        AppArticle,
    },
    data(){
        return{
            store
        }
    }
}
</script>

<template>
    <section class="container py-5" id="blog">
        
            <div class="col d-flex ">
                <div class="ms_hhp">
                    <h6>OUR EDITORIAL CONTENT</h6>
                    <h2>Latest News</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus distinctio odio nisi ipsum perferendis nesciunt officiis repudiandae voluptates optio sit expedita in, id aliquam quasi.</p>
                </div>
                <div class="ms_botton-down">
                    <button >SEE ALL</button>
                </div>
            </div>
            <div class="row row-cols-3">
                <div class="col d-flex" v-for="(article, index) in store.articles" :key="index">
                        <AppArticle :item="article" :title="article.title" :img="article.img" :active="article.active" />
                </div>
            </div>
    </section>
</template>

<style lang="scss" scoped>

</style>