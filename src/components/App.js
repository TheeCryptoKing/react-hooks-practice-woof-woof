import React, {useState, useEffect}from "react";
import DogBar from "./DogBar";
import DogInfo from "./DogInfo"

function App() {
  const [pupper, setPupper] = useState([])
  const [selectedPup , setSelectedPup] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/pups')
    .then((resp) => resp.json())
    .then((data) => {  
      setPupper(data)
     }) 
  }, [])

  function handleClick(currentPup) {
    setSelectedPup(currentPup)
  }

  function handleUpdate(updatedPup) {
    //need explanition for this 
    //takes updatedPup and maps it out and returns the pup that is clicked on from the created array using te ternary  
    const goodOrBadDoggo = pupper.map((pup) => pup.id === updatedPup.id ? updatedPup : pup)
    setPupper(goodOrBadDoggo)
  }

  return (
    <div className="App">
      <div id="filter-div">
        <button id="good-dog-filter">Filter good dogs: OFF</button>
      </div>
      <div id="dog-bar">
        <DogBar puppies={pupper} onClick={handleClick}/>
      </div>
      <div id="dog-summary-container">
        <h1>DOGGOS GO HERE:</h1>
        <div id="dog-info">
          <DogInfo selectedPup={selectedPup} onUpdate={handleUpdate}/>
        </div>
      </div>
    </div>
  );
}

export default App;