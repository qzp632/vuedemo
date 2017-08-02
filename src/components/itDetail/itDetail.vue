<template>
  <transition name="move" >
    <div id="box" v-show="shohi">
      {{isn}}
      <div @click="btnBack()">返回</div>
    </div>
    
  </transition>

</template>

<script type="text/ecmascript-6">
export default {
  props: {
    isn : {
      type: Object
    }
  },
  data() {
    return {
      shohi: false
    }
  },
  methods: {
    show() {
      this.shohi = true
    },
    btnBack() {
      this.shohi = false
    }
  }
}
</script>

<style scoped>
#box {
  width:100%;
  height:100%;
  background:#888;
  position:absolute;
  top:0;left:0;
}


.move-enter-active, .move-leave-active {
  transition: all .2s linear;
  transform:translate3d(0,0,0) 
}
.move-enter, .move-leave-to{
  transform:translate3d(100%,0,0) 
}

.sbc {
  transform:translate3d(100%,0,0) 
}

</style>
