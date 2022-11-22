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
            store,
            buttonShow: "SEE ALL"
            
        }
    },
    methods:{
        showMore(){
            if(this.buttonShow === "SEE ALL"){
                for(let i=0; i < this.store.articles.length; i++)
                this.store.articles[i].active = true;
                this.buttonShow = "SEE LESS"
            } else {
                for(let i=0; i < this.store.articles.length; i++)//5-3 = 2, cioè i box a cui si è applicato false.
                    if(!this.store.articles[i].preview){
                        this.store.articles[i].active = false;
                    }
                    this.buttonShow = "SEE ALL"
            }
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
                    <button @click="showMore()" class="ms_btn ms_btn_full"> {{buttonShow}}</button>
                </div>
            </div>
            <div class="row row-cols-lg-3 row-cols-md-2 row-cols-sm-1 row-cols-xs-1">
                <div class="col d-flex" v-for="(article, index) in store.articles" :key="index">
                    <!-- componente AppArticle -->
                    <AppArticle :item="article" :title="article.title" :img="article.img" :active="article.active" />
                </div>
            </div>
    </section>
</template>

<style lang="scss" scoped>
//RESPONSIVE
@media screen and (max-width: 575px){ 
    #blog .row{
        display: block; //la proprietà display flex, che con Bootstrap è di base in row, interferiva con il comando bootstramp delle row-col-sm e xs.
        .col{
            width: 70%;
            margin: 2rem auto;
            
        }
    }
}
</style>