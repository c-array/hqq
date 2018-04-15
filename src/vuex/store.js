import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

import main from './modules/main';
import groceries from './modules/groceries';
import check from './modules/groceries/check';
export default new Vuex.Store({
    modules:{
        main,
        groceries,
        check
    }
})