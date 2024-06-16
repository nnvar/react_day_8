import React, {useState} from 'react'
import EatForm from './EatForm';
import { IoMdCloseCircle } from "react-icons/io";
import { MdEdit } from "react-icons/md";

function Eat({places, completePlace, removePlace, updatePlace}) {

    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });

    const submitUpdate = value => {
        updatePlace(edit.id, value);
        setEdit({
            id: null,
            value: ''
        });
    };

    if(edit.id) {
        return <EatForm edit={edit} onSubmit={submitUpdate} />
    }

  return places.map((place, index) => (

    
        <div className={place.isComplete ? 'place-row complete' : 
        'place-row'} key={index} >
        
        <div key={place.id} onClick={() => completePlace(place.id)}>
            {place.text}
        </div>
        <div className='icons'>
            <IoMdCloseCircle onClick={() => removePlace(place.id)} className='delete-place' />
            <MdEdit  onClick={() => setEdit ({id: place.id, value: place.text})} className='edit-icon'/> 
        </div>



    </div>

  ))
}

export default Eat