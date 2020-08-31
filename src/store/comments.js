import { COMMENTS } from '../shared/comments';

const state = () => (COMMENTS);

const getters = {
    getCommentsWithDishId: (state) => (dishId) => state.filter((item) => item.dishId === dishId)
}

export const comments = { namespaced: true, state, getters };
