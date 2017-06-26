<template>
    <div class="content">
      <div class="con" v-for="item in itemcon.con">
          <div class="contop">
            <span>{{item.leftCon}}</span>
            <span>{{item.rightCon}}</span>
          </div>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    itemcon : {
      type: Object
    }
  }
}
</script>

<style scoped>
  .content {
    width: 100%;
    height: 15.46vw;;
    padding: 0 4%;
    background: #ffffff;
    box-sizing: border-box;
    display: flex;
    align-items: center;
  }
  .con {
    width: 100%;
    height: 10.66vw;
    display: flex;
    font-size: 3.2vw;
    color: #666666;
  }
  .contop {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: baseline;
    flex-direction: column;
  }
</style>
