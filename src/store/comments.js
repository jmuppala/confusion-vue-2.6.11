import { COMMENTS } from '../shared/comments';
import { SET_LOADING, SET_ERROR, SET_ITEMS } from './mutationTypes';

const state = () => ({ isLoading: false, errMess: null, items: null });

const getters = {
    getCommentsWithDishId: (state) => (dishId) =>  {
        if (state.items !== null) {
            return ({isLoading: false, errMess: null , items: state.items.filter((item) => item.dishId === dishId) });
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
    },
    addComment(state, payload) {
        state.push({...payload, id: state.length})
    }
}

const actions = {
    fetchComments ( { commit }) {
        commit(SET_LOADING);

        setTimeout(() => { commit(SET_ITEMS, COMMENTS) }, 2000);
    }
}

export const comments = { namespaced: true, state: state, getters, mutations, actions };
