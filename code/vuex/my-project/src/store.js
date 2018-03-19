/*
    业务
*/
import Vue from 'vue'
import Vuex from 'vuex'

//AOP的一个概念（面向切面编程）
Vue.use(Vuex)//为什么每个框架都这么干？
//这里既是提供install注册，也是为开发者提供的入口
//我们一般也会在这个地方严格对开发者进行约束，也可以得到有效的管理

var state = {
    count:10
}

const getters = { // 这里其实也是我们管理的一部分
    count(state){
        return state.count;
    },
    isOdd(state){
        return state.count % 2 == 0 ? "偶数" : "奇数" 
    }
}

const mutations = {//专门修改数据的
    increment(state){
        state.count ++;//对state进行操作
    },
    decrement(state){
        state.count --;//对state进行操作
    }
    
}

const actions = {
    increment:({commit})=>{
        //这里是做不了修改state的
        commit('increment')//这一步就是传递（传声筒）
    },
    decrement:({commit})=>{
        //这里是做不了修改state的
        commit('decrement')//这一步就是传递（传声筒）
    },
    clickOdd:({
        commit,
        state//操作的数据
    }) => {
        if(state.count % 2 == 0){
            commit("increment")//数据过滤
        }
    },
    clickAsync:({commit})=>{
        new Promise((resolve,reject)=>{
            setTimeout(function(){
                commit('increment')
                resolve();
            },1000);
        });
        
    }
}


export default new Vuex.Store({
    state,//数据维护
    mutations,//修改数据的
    actions,//操作事件（方法）的
    getters//获取数据的
})











