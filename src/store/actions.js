export const ACTION_TYPE = {
  TOGGLE_IS_FETCHING: 'TOGGLE_IS_FETCHING',
  LOAD_POSTS: 'LOAD_POSTS',
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

export const createPosts = () => ({
  type: 'LOAD_POSTS',
  payload: {
    request: {
      method: 'post',
      url: 'posts',
    }
  }
});

