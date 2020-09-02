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
    }
}

const actions = {
    fetchComments ({ commit }) {
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
    },
    addComment({ dispatch }, payload) {

        const url = baseUrl + 'comments';
            
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'same-origin'
        })
        .then(response => {
            if (response.ok) {
                return response;
            }
            else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText + ' ' + response.url);
                error.response = response;
                throw error;
            }
        },
        error => {
            throw error;
        })
        .then(response => response.json())
        .then(response => console.log('Posted: ', response))
        .then(() => dispatch('fetchComments'))
        .catch(error => { console.log('Post comments ', error.message);
            alert('Your comment could not be posted\nError: '+ error.message); })
    }
}

export const comments = { namespaced: true, state: state, getters, mutations, actions };
