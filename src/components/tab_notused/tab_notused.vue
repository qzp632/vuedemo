<template>
  <div style="overflow:auto;height:100%;flex:1">
    <div class="tab_notused" v-for="(item,index) in datalist" @click="btnItem(item)">
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
    <itDetail :isn="food" ref="isn"></itDetail>
  </div>
</template>

<script>
import tab_left from '@/components/tab_left/tab_left'
import hideCon from '@/components/hideCon/hideCon'
import itDetail from '@/components/itDetail/itDetail'
export default {
  data(){
    return {
      datalist: {},
      food: {}
    }
  },
  mounted () {
    // console.log(this.$store.state.count)
    this.cartView()
  },
  methods: {
      cartView() {
        var self = this
        this.$http.get('api/notused').then(function (res) {
            for(var i=0;i<res.body.notused.length;i++){
              res.body.notused[i].ish = false;
            }  
            self.datalist = res.body.notused     
        },function (res) {
            console.log(res)
        })
      },
      btn(item) {
        item.ish = !item.ish;
      },
      btnItem(item) {
        // this.food = item
        // this.$refs.isn.show()
      }
  },
  components: {
    'tab-left': tab_left,
    'hideCon': hideCon,
    'itDetail': itDetail
  }
}
</script>

<style scoped>
@import "../style/common.scss";
</style>
