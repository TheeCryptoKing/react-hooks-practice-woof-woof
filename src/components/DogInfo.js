import React from 'react'

function DogInfo({ selectedPup, onUpdate }) {

    function handlePatch() {
        selectedPup.isGoodDog = !selectedPup.isGoodDog
        fetch(`http://localhost:3001/pups/${selectedPup.id}`,{
            method: 'PATCH',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                'isGoodDog' : selectedPup.isGoodDog
            })
        })
        .then((resp) => resp.json())
        .then((data) => onUpdate(data))
    }

  return (
    <div>
    <img src={selectedPup.image} alt={selectedPup.name}/>
    <h2>{selectedPup.name}</h2>
    <button onClick={handlePatch}>{selectedPup.isGoodDog ? "Good Dog !" : "Bad Dog"}</button>
    </div>
  )
}

export default DogInfo