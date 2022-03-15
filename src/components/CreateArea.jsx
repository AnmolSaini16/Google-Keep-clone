import React, { useState } from 'react'
import './CreateArea.css'
import AddIcon from '@material-ui/icons/Add';

function CreateArea({  onAdd }) {
  const [isExpanded, setExpanded] = useState(false);

  const [note, setNote] = useState({
    title: '',
    content: ''
  });

  const handleChange = (e) => {
    const {name, value} = e.target
    setNote(preValue => {
      return {
        ...preValue,
        [name]: value,
      }
    })
  }

  const handleExpanded = () => {
    setExpanded(true)
  }

  const submitButton = (e) => {
    if(e.target.value.trim()===''){ 
      return;
    } 
    onAdd(note)
    setNote({
      title: '',
      content: ''
    })
    e.preventDefault();

  }

  return (
    <div>
      <form>
        {isExpanded && <input 
          type="text" 
          placeholder='Title' 
          name='title'
          value={note.title} 
          onChange={handleChange}
        />}
        <p>
          <textarea 
            name='content' 
            onClick={handleExpanded}
            placeholder='Take a note...'
            value={note.content}
            onChange={handleChange}
            rows={isExpanded ? 3 : 1}
          >
          </textarea>
        </p>
        <button className='submit-button' onClick={submitButton}>
          <AddIcon className='add-icon' />
        </button>
      </form>
    </div>
  )
}

export default CreateArea
