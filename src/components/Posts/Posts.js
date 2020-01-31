import React from 'react';
import { Delete, Edit } from '@material-ui/icons';
import { Link } from 'react-router-dom';

const Posts = ({ posts, saveId, transferDataForEditing }) => (
  <ul className='posts__list row no-gutters justify-content-center'>
    {posts.map(item => (
      <li key={item.id} className='col-11 col-md-9 col-lg-7 my-3'>
        <article className='posts__item'>
          <header className='row justify-content-between flex-nowrap no-gutters'>
            <h3 className='posts__title mb-2'>{item.title}</h3>
            <div className='row align-items-center flex-nowrap no-gutters'>
              <Link
                className='posts__btn btn btn-outline-info'
                to={`/edit/${item.id}`}
                onClick={() => transferDataForEditing(item.title, item.body)}
              >
                <Edit />
              </Link>
              <button
                className='posts__btn btn btn-outline-info'
                data-toggle='modal'
                data-target='#exampleModalCenter'
                onClick={() => saveId(item.id)}
              >
                <Delete />
              </button>
            </div>
          </header>
          <section className='posts__body'>
            {item.body
              ? item.body.split('\n').map((item, index) => (
                <p key={index} className='posts__text'>{item}</p>
              ))
              : item.body
            }
          </section>
        </article>
      </li>
    ))}
  </ul>
);

export default Posts;