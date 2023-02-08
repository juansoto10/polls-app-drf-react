import {
    GET_POLLS_LIST_SUCCESS,
    GET_POLLS_LIST_FAIL,
    GET_POLL_SUCCESS,
    GET_POLL_FAIL,
    GET_POLLS_LIST_CATEGORIES_SUCCESS,
    GET_POLLS_LIST_CATEGORIES_FAIL,
    GET_SEARCH_POLL_SUCCESS,
    GET_SEARCH_POLL_FAIL
} from '../actions/types';

const initialState = {
    polls_list: null,
    polls_list_category: null,
    filtered_polls: null,
    poll: null,
    choices: null,
    count: null,
    next: null,
    previous: null
};

export default function poll(state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case GET_POLLS_LIST_CATEGORIES_SUCCESS:
            return {
                ...state,
                polls_list_category: payload.results.questions,
                count: payload.count,
                next: payload.next,
                previous: payload.previous,
            }
        case GET_POLLS_LIST_CATEGORIES_FAIL:
            return {
                ...state,
                polls_list_category: null,
                count: null,
                next: null,
                previous: null,
            }
        case GET_POLLS_LIST_SUCCESS:
            return {
                ...state,
                polls_list: payload.results.questions,
                count: payload.count,
                next: payload.next,
                previous: payload.previous,
            }
        case GET_POLLS_LIST_FAIL:
            return {
                ...state,
                polls_list: null,
                count: null,
                next: null,
                previous: null,
            }
        case GET_POLL_SUCCESS:
            return {
                ...state,
                poll: payload.question,
                choices: payload.choices
            }
        case GET_POLL_FAIL:
            return {
                ...state,
                post: null,
                choices: null
            }
        case GET_SEARCH_POLL_SUCCESS:
            return {
                ...state,
                filtered_polls: payload.filtered_polls
            }
        case GET_SEARCH_POLL_FAIL:
            return {
                ...state,
                filtered_polls: null
            }
        default:
            return state
    }
}