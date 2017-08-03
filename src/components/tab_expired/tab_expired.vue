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

<script>
import tab_left from '@/components/tab_left/tab_left'
import hideCon from '@/components/hideCon/hideCon'
export default {
  data(){
    return {
      datalist: {}
    }
  },
  mounted () {
    this.cartView()
    // console.log(this.$store.state.count)
  },
  methods: {
      cartView() {
        var self = this
        this.$http.get('http://localhost:8080/api/expired').then(function (res) {
            for(var i=0;i<res.body.expired.length;i++){
              res.body.expired[i].ish = false;
            }  
            self.datalist = res.body.expired     
        },function (res) {
            console.log(res)
        })
      },
      btn(item) {
        // console.log(this.$store.commit("increment"))
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
