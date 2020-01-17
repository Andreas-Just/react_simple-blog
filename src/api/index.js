import * as axios from 'axios';

const instance = axios.create({
  baseURL: 'https://simple-blog-api.crew.red/',
});


export const postsAPI = {
  getAllPosts() {
    return instance.get(`posts`)
      .then(response => {
        return response.data
      })
  },
};
