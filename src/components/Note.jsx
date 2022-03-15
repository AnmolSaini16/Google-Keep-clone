import React from 'react'
import './Note.css'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

function Note({ title, content, onDelete, id }) {
  return (
    <div className='note'>
        <h1>{title}</h1>
        <p>{content}</p>
        <button onClick={() => onDelete(id)}>
          <DeleteOutlineIcon className='delete-icon' />
        </button>
    </div>
  )
}

export default Note;