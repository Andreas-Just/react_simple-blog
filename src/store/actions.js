import qs from 'qs';
export const ACTION_TYPE = {
  TOGGLE_IS_FETCHING: 'TOGGLE_IS_FETCHING',
  LOAD_POSTS: 'LOAD_POSTS',
  INPUT_ADD_HANDLER: 'INPUT_ADD_HANDLER',
  CREATE_POST: 'CREATE_POST',
  DELETE_POST: 'DELETE_POST',
  SAVE_ID: 'SAVE_ID',
};

export const toggleIsFetching = (isFetching) => ({
  type: ACTION_TYPE.TOGGLE_IS_FETCHING,
  isFetching
});

export const loadPosts = () => ({
  type: 'LOAD_POSTS',
  payload: {
    request: {
      method: 'get',
      url: 'posts',
    }
  }
});

export const inputAddHandler = (name, value) => ({
  type: 'INPUT_ADD_HANDLER',
  name,
  value,
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

export const deletePosts = (id) => ({
  type: 'DELETE_POST',
  payload: {
    request: {
      method: 'delete',
      url: `posts/${id}/`,
    }
  }
});

export const saveId = (id) => ({
  type: 'SAVE_ID',
  id
});

