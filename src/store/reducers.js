import { ACTION_TYPE } from './actions';

const initialState = {
  posts: [],
  isFetching: false,
  isRedirect: false,
  isReload: false,
  post: {
    title: '',
    body: '',
  },
  deleteId: null,
};

export const getNextState = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPE.TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching
      };
    case ACTION_TYPE.LOAD_POSTS + '_SUCCESS':
      return {
        ...state,
        posts: [...action.payload.data].reverse(),
        isFetching: true,
        isRedirect: false,
        isReload: false
      };
    case ACTION_TYPE.INPUT_CLEAR_HANDLER:
      return {
        ...state,
        post: {
          ...state.post,
          title: '',
          body: '',
        }
      };
    case ACTION_TYPE.INPUT_CHANGE_HANDLER:
      return {
        ...state,
        post: {
          ...state.post,
          [action.name]: action.value,
        }
      };
    case ACTION_TYPE.CREATE_POST + '_SUCCESS':
      return {
        ...state,
        isRedirect: true,
      };
    case ACTION_TYPE.UPDATE_POSTS + '_SUCCESS':
      return {
        ...state,
        isRedirect: true,
      };
    case ACTION_TYPE.DELETE_POST + '_SUCCESS':
      return {
        ...state,
        isReload: true,
      };
    case ACTION_TYPE.SAVE_ID:
      return {
        ...state,
        deleteId: action.id,
      };
    case ACTION_TYPE.TRANSFER_DATA_FOR_EDITING:
      return {
        ...state,
        post: {
          title: action.title,
          body: action.body,
        }
      };
    default:
      return state;
  }
};