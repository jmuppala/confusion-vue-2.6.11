import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';

function state (itemType) {
    switch (itemType) {
        case 'dishes':
            return DISHES;
        case 'comments': 
            return COMMENTS;
        case 'promotions':
            return PROMOTIONS;
        case 'leaders':
            return LEADERS;
    }
}

export const dishes = { state: state('dishes')};
export const comments = { state: state('comments')};
export const promotions = { state: state('promotions')};
export const leaders = { state: state('leaders')};