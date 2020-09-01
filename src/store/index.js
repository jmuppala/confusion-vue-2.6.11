import Vue from 'vue';
import Vuex from 'vuex';
import { dishes, promotions, leaders } from './items';
import { comments } from './comments'
import { createLogger } from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        dishes,
        comments,
        promotions,
        leaders
    },
    plugins: [createLogger()]
});