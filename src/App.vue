<script>
import {store} from "./store";
import AppHeader from "./components/AppHeader.vue"
import AppJumboForm from "./components/AppJumboForm.vue"
import AppSections from "./components/AppSections.vue"
import AppSubscriber from "./components/AppSubscriber.vue"
import AppFooter from "./components/AppFooter.vue"

export default {
  components: {
    AppHeader,
    AppJumboForm,
    AppSections,
    AppSubscriber,
    AppFooter

  },
  data(){
    return {
      store,
    }
  }
}
</script>

<template>

  <!-- header -->
  <AppHeader />
  <!-- /header -->

  <!-- jumbo-form -->
  <AppJumboForm />
  <!-- /jumbo-form -->

  <!-- sections -->
  <AppSections/>
  <!-- /sections -->

  <!-- subscribe form -->
  <AppSubscriber />
  <!-- /subscribe form -->

  <!-- footer -->
  <AppFooter/>
  <!-- footer -->

</template>

<style lang="scss">
@use "./styles/general.scss" as *

</style>
