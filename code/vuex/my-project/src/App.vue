<template>
  <div id="app">
    <h1>Vuex课堂</h1>
    <input type="button" value="增加" @click="increment"/>
    <input type="button" value="减少" @click="decrement"/>
    <input type="button" value="偶数才能增加" @click="clickOdd"/>
    <input type="button" value="间隔1秒增加" @click="clickAsync"/>
    <div>{{count}}是{{isOdd}}</div>
  </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'
/*
  mapGetters:获取数据
  mapActions:管理事件
*/
export default {
  /*
    数据
    事件
  */
  //Vue原来的对象通过Vuex进行管理
  computed:mapGetters([
    'count','isOdd'
  ]),
  methods:mapActions([
    'increment','decrement','clickOdd','clickAsync'//mapActions来管理的方法
  ])

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
