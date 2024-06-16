import React, { useState } from 'react';
import EatForm from './EatForm';
import Eat from './Eat';

function EatList() {
  const [places, setPlaces] = useState([]);
  const [selectedPlace, setSelectedPlace] = useState(null);

  const addWhere = place => {
    if (!place.text || /^\s*$/.test(place.text)) {
      return;
    }

    const newPlaces = [place, ...places];
    setPlaces(newPlaces);
  };

  const updatePlace = (placeId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setPlaces(prev => prev.map(item => (item.id === placeId ? newValue : item)));
  };

  const removePlace = id => {
    const removeArr = [...places].filter(place => place.id !== id);
    setPlaces(removeArr);
  };

  const completePlace = id => {
    let updatedPlaces = places.map(place => {
      if (place.id === id) {
        place.isComplete = !place.isComplete;
      }
      return place;
    });
    setPlaces(updatedPlaces);
  };

  const selectRandomPlace = () => {
    if (places.length === 0) {
      alert('No places to select from.');
      return;
    }

    const randomIndex = Math.floor(Math.random() * places.length);
    setSelectedPlace(places[randomIndex]);
  };

  return (
    <div>
      <h1>Where do we want to eat?</h1>
      <EatForm onSubmit={addWhere} />
      <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
        <Eat places={places} updatePlace={updatePlace} completePlace={completePlace} removePlace={removePlace} />
      </div>
      <div className='randomContainer'>
      <button 
        className='randomButton' 
        onClick={selectRandomPlace}
        >
          Select Random Place</button></div>
      {selectedPlace && (
        <div className='randomeReturn'>
          <h2>Selected Place:</h2>
          
          <h3>{selectedPlace.text}</h3>
        </div>
      )}
    </div>
  );
}

export default EatList;