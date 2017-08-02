<template>
  <div>
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
              <span class="arc" v-on:click="btn(item,$event)">使用规则 <img v-show="item.ish" src="../../assets/up.png"><img v-show="!item.ish" src="../../assets/down.png"></span>
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
import reqst from '@/components/coom/coom'
export default {
  data(){
    return {
      datalist: {},
      food: {}
    }
  },
  mounted () {
    this.cartView()
  },
  methods: {
      cartView() {
        let param = {age:1}
        reqst("api/alreadyuse",
          param,
          res => {
            for(let i=0;i<res.alreadyuse.length;i++){
              res.alreadyuse[i].ish = false;
            }  
            this.datalist = res.alreadyuse
          })

        // var self = this
        // this.$http.get('api/alreadyuse').then(res => {
        //     for(var i=0;i<res.body.alreadyuse.length;i++){
        //       res.body.alreadyuse[i].ish = false;
        //     }  
        //     this.datalist = res.body.alreadyuse 
        // },err => {
            
        // })

        // this.$http.get('api/alreadyuse').then(function (res) {
        //   console.log(res.body.alreadyuse)
        //     for(var i=0;i<res.body.alreadyuse.length;i++){
        //       res.body.alreadyuse[i].ish = false;
        //     }  
        //     self.datalist = res.body.alreadyuse     
        // },function (err) {
        //     console.log(err)
        // })

      },
      btn(item,ev) {
        ev.stopPropagation()
        // ev.preventDefault()
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
