import { DISHES } from '../shared/dishes';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';
import { SET_LOADING, SET_ERROR, SET_ITEMS } from './mutationTypes';

const state = () => ({ isLoading: false, errMess: null, items: null });

const getters = {
    featured: (state) => {
        if (state.items !== null) {
            return ({isLoading: false, errMess: null , item: state.items.filter((item) => item.featured)[0] });
        }
        else if (state.errMess !== null)
            return ({isLoading: false, errMess: state.errMess , item: null });
        else
            return ({isLoading: state.isLoading, errMess: null , item: null });
    },
    getItemWithId: (state) => (id) => {
        if (state.items !== null) {
            return ({isLoading: false, errMess: null , item: state.items.filter((item) => item.id === id)[0] });
        }
        else if (state.errMess !== null)
            return ({isLoading: false, errMess: state.errMess , item: null });
        else
            return ({isLoading: state.isLoading, errMess: null , item: null });
    }
}

const mutations = {
    [SET_LOADING] (state) {
        state.isLoading = true; 
        state.errMess = null;
        state.items = null;
    },
    [SET_ERROR] (state, payload) {
        state.isLoading = false; 
        state.errMess = payload;
        state.items = null;
    },
    [SET_ITEMS] (state, payload) {
        state.isLoading = false; 
        state.errMess = null;
        state.items = payload;
    }
}

const actions = (itemType) => ({
    fetchItems ({ commit }) {
        commit(SET_LOADING);

        setTimeout(() => { 
            switch (itemType) {
                case 'dishes':
                    commit(SET_ITEMS, DISHES);
                    break;
                case 'promotions':
                    commit(SET_ITEMS, PROMOTIONS);
                    break;
                case 'leaders':
                    commit(SET_ITEMS, LEADERS);
                    break;
                default:
                    break;
            }
        }, 2000);
    }
})

export const dishes = { namespaced: true, state: state, getters, mutations, actions: actions('dishes') };
export const promotions = { namespaced: true, state: state, getters, mutations, actions: actions('promotions') };
export const leaders = { namespaced: true, state: state, getters, mutations, actions: actions('leaders') };