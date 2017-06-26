<template>
  <div id="app">
    <v-header></v-header>
    <v-topTab></v-topTab>
    <router-view></router-view>
  </div>
</template>

<script>
import header from '@/components/header/header'
import topTab from '@/components/topTab/topTab'
export default {
  components: {
    'v-header': header,
    'v-topTab': topTab
  }
}
</script>

<style>
html,body {
  height: 100%;
}
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
a:link {
  text-decoration:none;
}
a:visited {
  text-decoration:none;
}
a:active {
  text-decoration:none;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #F8F8F8;
  height: 100%;
  overflow:hidden;
  display:flex;
  flex-direction:column;
}
</style>
