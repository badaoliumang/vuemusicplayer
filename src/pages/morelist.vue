<template lang="html">
  <div class="more-list">
      <div class="wrapper">
        <h3>{{ this.$route.params.title }}</h3>
        <VuePullRefresh :on-refresh="onRefresh">
          <div class="info url log" v-for="(item,index) in moreListData" :key="index">
              <div class="poster">
                  <img :src="item.pic_big" :alt="item.title">
              </div>
              <div class="text-wrap">
                  <div class="title">{{ item.title }}</div>
                  <div class="author">{{ item.artist_name }}</div>
              </div>
          </div>
        </VuePullRefresh>
      </div>
    </div>
</template>

<script>

export default {
  name:"morelist",
  data(){
    return{
      moreListData:[],
      offset:0
    }
  },
  mounted(){
    const moreListUrl = this.HOST + "/v1/restserver/ting?method=baidu.ting.billboard.billList&type="+ this.$route.params.musictype +"&size=12&offset=0"
    this.$axios.get(moreListUrl)
      .then(res => {
        this.moreListData = res.data.song_list
        this.offset = this.offset+12
      })
      .catch(error => {
        console.log(error);
      })
  }
}
</script>

<style scoped>

.wrapper {
    padding-top: 13px;
    text-align: center;
    margin-bottom: 10px;
    background: #fff;
    clear: both;
    overflow: hidden;
}

h3{
  font-size: 22px;
  text-align: left;
  margin-left: 17px;
  margin-bottom: 5px;
}

.wrapper .info {
    width: 42%;
    float: left;
    text-align: center;
    padding-left: 17px;
    display: block;
    text-align: left;
    margin-bottom: 10px;
    position: relative;
}

</style>
