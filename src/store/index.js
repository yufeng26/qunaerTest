import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
    state:state,
    /* actions: {
        changeCity(ctx, city){
            ctx.commit('changeCityName',city);
            console.log(city);
        }
    },
    mutations:{
        changeCityName(state, city){
            state.city = city;
        }
    } */
    /* 不通过actions,直接调用mutations */
    mutations:mutations
})