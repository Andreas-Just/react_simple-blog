import qs from 'qs';
export const ACTION_TYPE = {
  TOGGLE_IS_FETCHING: 'TOGGLE_IS_FETCHING',
  LOAD_POSTS: 'LOAD_POSTS',
  INPUT_CLEAR_HANDLER: 'INPUT_CLEAR_HANDLER',
  INPUT_CHANGE_HANDLER: 'INPUT_CHANGE_HANDLER',
  TRANSFER_DATA_FOR_EDITING: 'TRANSFER_DATA_FOR_EDITING',
  CREATE_POST: 'CREATE_POST',
  UPDATE_POSTS: 'UPDATE_POSTS',
  DELETE_POST: 'DELETE_POST',
  SAVE_ID: 'SAVE_ID',
};

export const toggleIsFetching = (isFetching) => ({
  type: ACTION_TYPE.TOGGLE_IS_FETCHING,
  isFetching
});

export const loadPosts = () => ({
  type: ACTION_TYPE.LOAD_POSTS,
  payload: {
    request: {
      method: 'get',
      url: 'posts',
    }
  }
});

export const inputClearHandler = () => ({
  type: ACTION_TYPE.INPUT_CLEAR_HANDLER,
});

export const inputChangeHandler = (name, value) => ({
  type: ACTION_TYPE.INPUT_CHANGE_HANDLER,
  name,
  value,
});

export const transferDataForEditing = (title, body) => ({
  type: ACTION_TYPE.TRANSFER_DATA_FOR_EDITING,
  title,
  body,
});

export const createPosts = (post) => ({
  type: 'CREATE_POST',
  payload: {
    request: {
      method: 'post',
      url: 'posts',
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      data: qs.stringify({...post}),
    }
  }
});

export const updatePosts = (post, id) => ({
  type: ACTION_TYPE.UPDATE_POSTS,
  payload: {
    request: {
      method: 'put',
      url: `posts/${id}`,
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      data: qs.stringify({...post}),
    }
  }
});

export const deletePosts = (id) => ({
  type: ACTION_TYPE.DELETE_POST,
  payload: {
    request: {
      method: 'delete',
      url: `posts/${id}`,
    }
  }
});

export const saveId = (id) => ({
  type: ACTION_TYPE.SAVE_ID,
  id
});
