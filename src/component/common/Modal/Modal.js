import React from 'react';

const Modal = (props) => {
  const {title, body, updatePosts, createPosts, deletePosts, id, post} = props;
  return (
    <div className='modal fade' id='exampleModalCenter' tabIndex='-1' role='dialog'
         aria-labelledby='exampleModalCenterTitle' aria-hidden='true'>
      <div className='modal-dialog modal-dialog-centered' role='document'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title' id='exampleModalCenterTitle'>{title}</h5>
            <button type='button' className='close' data-dismiss='modal' aria-label='Close'>
              <span aria-hidden='true'>&times;</span>
            </button>
          </div>
          <div className='modal-body'>
            {body}
          </div>
          <div className='modal-footer'>
            <button className='btn btn-secondary' data-dismiss='modal'>
              No
            </button>
            <button
              className='btn btn-info'
              onClick={ post && id ? () => updatePosts(post, id)
                : post ? () => createPosts(post)
                : id ? () => deletePosts(id)
                : null
              }
              data-dismiss='modal'
            >
              Yes
            </button>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Modal;