import React, {useState, useEffect, useRef } from 'react'

function EatForm(props) {
    const[input, setInput] = useState('');

    const inputRef = useRef(null)

    useEffect(() => {
      //inputRef.current.focus()
    })


    const handleChange = e => {
        setInput(e.target.value);
    }



    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 1000),
            text: input
        });

        setInput('');
    }

  return (
    <form className='eat-form' onSubmit={handleSubmit}>
        <input 
          type='text' 
          onChange={handleChange} 
          placeholder='Where to Eat' 
          value={input} 
          name='text' 
          className='eat-input'
          ref={inputRef}
          />
          
        
        <button className='eat-button'>Add where to</button>
    </form>
  )
}

export default EatForm