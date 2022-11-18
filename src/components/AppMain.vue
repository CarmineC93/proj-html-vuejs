<script>
import AppJumboForm from "./AppJumboForm.vue"
import AppAboutUs from "./AppAboutUs.vue"
import AppBusiness from "./AppBusiness.vue"
import AppProcess from "./AppProcess.vue"
import AppTeam from "./AppTeam.vue"
import AppNews from "./AppNews.vue"
import AppSubscriber from "./AppSubscriber.vue"

export default {
    name: "AppMain",
    components: {
    AppJumboForm,
    AppAboutUs,
    AppBusiness,
    AppProcess,
    AppTeam,
    AppNews,
    AppSubscriber,

  },
}
</script>


<template>
  
  <AppJumboForm />
  
  <AppAboutUs/>
  
  <AppBusiness/>
  
  <AppProcess/>
  
  <AppTeam/>
  
  <AppNews/>
  
  <AppSubscriber/>

</template>

<style lang="scss" scoped>

</style>