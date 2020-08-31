import Vue from 'vue';
import Vuex from 'vuex';
import { dishes, comments, promotions, leaders } from './items';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        dishes,
        comments,
        promotions,
        leaders
    }
});