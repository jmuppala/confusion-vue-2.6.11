import { SET_LOADING, SET_ERROR, SET_ITEMS } from './mutationTypes';
import { baseUrl } from '../shared/baseUrl';
import fetch from 'cross-fetch';

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
        const url = baseUrl + 'comments';

        fetch(url)
        .then(response => {
            if (response.ok) {
                return response;
            }
            else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText + ' ' + response.url);
                throw error;
            }
        },
        error => {
            throw error;
        })
        .then(response => response.json())
        .then(items => commit(SET_ITEMS, items))
        .catch(error => commit(SET_ERROR, error.message));
    }
}

export const comments = { namespaced: true, state: state, getters, mutations, actions };
