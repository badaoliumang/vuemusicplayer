<template lang="html">
  <div class="">
    <TodayRecommend title="今日推荐" url="/v1/restserver/ting?method=baidu.ting.billboard.billList&type=1&size=6&offset=0"/>
    <NewsMusic />
    <SwiperBanner/>
    <MusicListNav />
    <keep-alive>
      <router-view />
    </keep-alive>
    <TodayRecommend title="热门榜单" url="/v1/restserver/ting?method=baidu.ting.billboard.billList&type=24&size=6&offset=0"/>
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
