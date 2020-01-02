import React from 'react';

const Posts = ({ posts }) => {
  return (
    <div className='posts row no-gutters flex-column align-items-center'>
      <button className='posts__btn-add btn-outline-dark row align-self-end mr-4 mt-3'>
        Add post
      </button>
      <ul className='posts__list row no-gutters justify-content-center'>
        {posts.map(item => (
          <li key={item.id} className='posts__item col-sm-11 col-md-9 col-lg-7 my-2'>
            <h3 className='posts__title mb-2'>{item.title}</h3>
            {item.body.split('\n').map((item, index) => (
              <p key={index} className='posts__body'>{item}</p>
            ))}
          </li>
        ))}
      </ul>
    </div>
  )
};

export default Posts;