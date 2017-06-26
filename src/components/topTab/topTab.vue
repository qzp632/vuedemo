<template>
  <div class="topTab">
    <ul>
      <li>
        <router-link to="/notused">未使用(<span>12</span>)</router-link>
      </li>
      <li>
        <router-link to="/expired">已过期</router-link>
      </li>
      <li>
        <router-link to="/alreadyuse">已使用</router-link>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
}
</script>

<style scoped>
@import "topTab.scss";
</style>
