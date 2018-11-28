<template lang="html">
  <div class="">
    <TodayRecommend/>
    <NewsMusic />
      <SwiperBanner/>
  </div>
</template>

<script>
import TodayRecommend from "../components/Today_Recommend"
import NewsMusic from "../components/News_Music"
import SwiperBanner from "../components/Swiper_Banner"
export default {
    name:"home",
    components:{
    TodayRecommend,
    NewsMusic,
    SwiperBanner
    }
}
</script>

<style scoped>
</style>
