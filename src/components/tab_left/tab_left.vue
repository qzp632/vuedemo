<template>
    <div class="notused_left">
      <div class="notused_left_top">
      </div>
      <div class="notused_left_con">
        ¥ <span class="money">{{leftData.Amount}}</span>
      </div>
      <div class="notused_left_bottom">
        满<span>{{leftData.NeedMoney}}</span>可用
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    leftData: {
      type: Object
    }
  }
}
</script>

<style scoped>
@import "tab_left.scss"
</style>
