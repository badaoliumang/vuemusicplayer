<template lang="html">
  <div class="">
    <TodayRecommend/>
    <NewsMusic />
    <SwiperBanner/>
    <MusicListNav />
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
import TodayRecommend from "../components/Today_Recommend"
import NewsMusic from "../components/News_Music"
import SwiperBanner from "../components/Swiper_Banner"
import MusicListNav from "./musiclist/music_listnav"
export default {
    name:"home",
    components:{
    TodayRecommend,
    NewsMusic,
    SwiperBanner,
    MusicListNav
    }
}
</script>

<style scoped>
</style>
