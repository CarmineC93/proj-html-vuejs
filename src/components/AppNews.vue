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
    <section class="container py-5 my-5" id="blog">
        
            <div class="col d-flex justify-content-between mb-4">
                <div class="ms_hhp">
                    <h6>OUR EDITORIAL CONTENT</h6>
                    <h2>Latest <span class="ms_evidence_light">News</span> </h2>
                    <p>Every week we publish content about what is best in the business world.</p>
                </div>
                <div class="ms_botton-down">
                    <button class="ms_btn ms_btn_full">SEE ALL</button>
                </div>
            </div>
            <div class="row row-cols-lg-3 row-cols-md-2 row-cols-sm-1 row-cols-xs-1">
                <div class="col d-flex" v-for="(article, index) in store.articles" :key="index">
                        <AppArticle :item="article" :title="article.title" :img="article.img" :active="article.active" />
                </div>
            </div>
    </section>
</template>

<style lang="scss" scoped>

</style>