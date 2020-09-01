import { COMMENTS } from '../shared/comments';

const state = () => (COMMENTS);

const getters = {
    getCommentsWithDishId: (state) => (dishId) => state.filter((item) => item.dishId === dishId)
}

const mutations = {

    addComment(state, payload) {
        state.push({...payload, id: state.length})
    }
}

export const comments = { namespaced: true, state, getters, mutations };
