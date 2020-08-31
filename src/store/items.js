import { DISHES } from '../shared/dishes';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';

function state (itemType) {
    switch (itemType) {
        case 'dishes':
            return DISHES;
        case 'promotions':
            return PROMOTIONS;
        case 'leaders':
            return LEADERS;
    }
}

const getters = {
    featured: (state) => ( state.filter((item) => item.featured)[0] ),
    getItemWithId: (state) => (id) => state.filter((item) => item.id === id)[0],
}

export const dishes = { namespaced: true, state: state('dishes'), getters };
export const promotions = { namespaced: true, state: state('promotions'), getters };
export const leaders = { namespaced: true, state: state('leaders'), getters };