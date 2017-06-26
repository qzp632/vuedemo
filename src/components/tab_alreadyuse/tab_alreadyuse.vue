<template>
  <div>
    <div class="tab_notused" v-for="(item,index) in datalist">
        <div class="notused_box">
          <tab-left :leftData="item"></tab-left>

          <div class="notused_right">
            <div class="notused_right_top">
              <span class="couponstyle">{{item.couponStyle}}</span>
            </div>
            <div class="notused_right_con">
              <span class="coupondate">{{item.couponDate}}</span>
            </div>
            <div class="notused_right_bottom">
              <span class="arc" v-on:click="btn(item)">使用规则 <img v-show="item.ish" src="../../assets/up.png"><img v-show="!item.ish" src="../../assets/down.png"></span>
            </div>
          </div>
        </div>
        <hideCon v-show="item.ish" :itemcon="item"></hideCon>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import tab_left from '@/components/tab_left/tab_left'
import hideCon from '@/components/hideCon/hideCon'
import data from '../../../data.json'
for (var i = 0; i < data.body2.length; i++) {
  data.body2[i].ish = false
}
export default {
  data(){
    return {
      datalist: data.body2
    }
  },
  created () {
    for(var i=0;i<this.datalist.length;i++){
      this.datalist[i].ish = false;
    }

  },
  methods: {
      btn(item) {
        item.ish = !item.ish;
      }
  },
  components: {
    'tab-left': tab_left,
    'hideCon': hideCon
  }
}
</script>

<style scoped>
@import "../style/common.scss";
</style>
