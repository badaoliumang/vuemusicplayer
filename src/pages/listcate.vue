<template lang="html">
  <div>
    <ListCate_List v-for="item in musicTypeJSON" :musicType="item" />
  </div>
</template>

<script>

import MusicType from "../assets/data/musictype.json"
import ListCate_List from "../components/ListCate_List"

export default {
  data(){
   return{
     musicTypeJSON:[]
   }
  },
  components:{
    ListCate_List
  },
  created(){
    this.musicTypeJSON = MusicType.currentType
  }
}
</script>

<style lang="css">
</style>
