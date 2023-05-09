// import React, {useEffect, useState} from "react";
// import DogBar from "./DogBar";
// import DogInfo from "./DogInfo";

// //Updat and go through code for 2nd atte

// function App() {
//   const [pups , setPups] = useState([])
//   const [pupId , setPupId] = useState(null)
//   const [filteredPup , setfilteredPup] = useState(false)
//   let selectedPup = pups.find((pup) => pup.id === pupId)
//   console.log(selectedPup)


//   useEffect(() => {
//     fetch('http://localhost:3001/pups')
//     .then((r) => r.json())
//     .then((data) => { 
//       setPups(data)
//     });

//   }, [])//DONT FUCKING FORGET YUR DEPENEDECY ARRAY = EVANS WORDS 
  
//   function handlePupId(pup) {
//     setPupId(pup)
//   }

//   function handleUpdate(updated) {
//     const updatedPup = pups.map((pup) => 
//       pup.id === updated.id ? updated : pup
//     )
//     setPups(updatedPup) 
//   }

//   let filteredPups = pups

//   if(filteredPup) {
//     filteredPups = filteredPups.filter((pup) => pup.isGoodDog )
//   }


//   return (
//     <div className="App">
//       <div id="filter-div">
//         <button id="good-dog-filter" onClick={() => setfilteredPup(prevfilteredPup => !prevfilteredPup)}>Filter good dogs {filteredPup ? "ON" : "OFF"}</button>

//       </div>
//       <div id="dog-bar">
//         <DogBar pups={filteredPups} onPupClick={handlePupId}/>
//       </div>
//       <div id="dog-summary-container">
//         <h1>DOGGO:</h1>
//         <div id="dog-info">
//           <DogInfo 
//             pups={selectedPup}
//             onUpdate={handleUpdate}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }
// export default App;


// import React from 'react'

// function DogBar({ pups, onPupClick }) {
   
//     const puppies = pups.map((pups) => {
//         return <span key={pups.id} onClick={() => onPupClick(pups.id)}>
//           {pups.name}
//         </span>
//     })
//   return (
//     <>
//     {puppies}
//     </>
//   )
// }

// export default DogBar

// import React from 'react'

// function DogInfo({ pups, onUpdate }) {

//     function pupPatch() {
//         pups.isGoodDog = !pups.isGoodDog

//         fetch(`http://localhost:3001/pups/${pups.id}`,{
//             method: 'PATCH',
//             headers: {
//                 'Content-Type' : 'application/json'
//             },
//             body: JSON.stringify({
//                 'isGoodDog' : pups.isGoodDog
//             })
//         })
//         .then((resp) => resp.json())
//         .then((UpdatedDatar) => {
//             onUpdate(UpdatedDatar)

//         })
//     }


//     if( !pups ) return <h3>Please Select pup :)</h3>
//   return (
//     <>
//     <img src={pups.image} alt={pups.name}/>
//     <h2>{pups.name}</h2>
//     <button onClick={pupPatch}>{pups.isGoodDog ? "Good Dog!" : "Bad Dog :("}</button>
//     </>
//   )
// }