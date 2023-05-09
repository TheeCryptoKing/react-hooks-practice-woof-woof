
// function App() {
// const [doggos, setDoggos] = useState([])
// const [pupId , setPupId] = useState(null)
// let selectedPup = doggos.find((doggo) => doggo.id === pupId)

// useEffect(() => {
//     fetch('http://localhost:3001/pups')
//     .then((resp) => resp.json())
//     .then((data) => { setDoggos(data)}) 
// }, [])

// function handlePupId(pup) {
//         setPupId(pup)
//     }

// function handleUpdate(updateDoggo) {
//     const goodOrBad = doggos.map((doggo) => doggo.id === updateDoggo.id ? updateDoggo : doggo)
//     setDoggos(goodOrBad)
// }



// return (
//     <div className="App">
//     <div id="filter-div">
//         <button id="good-dog-filter" >Filter good dogs OFF</button>

//     </div>
//     <div id="dog-bar">
//         <DogBar doggos={doggos} onClick={handlePupId} />
//     </div>
//     <div id="dog-summary-container">
//         <h1>DOGGO:</h1>
//         <div id="dog-info">
//         <DogInfo currentDoggo={selectedPup} onUpdate={handleUpdate}/>
//         </div>
//     </div>
//     </div>
// );
// }
// export default App;
  

// import React from 'react'

// function DogBar({ doggos, onClick}) {

// const renderDoggos = doggos.map((doggo) => {
// return (
// <span key={doggo.id} onClick={() => onClick(doggo.id)}>
//     {doggo.name}
// </span>)
// }) 

// return (
// <>
// {renderDoggos}
// </>
// )
// }
// export default DogBar

// import React from 'react'

// function DogInfo({ currentDoggo, onUpdate}) {

//     function handlePatch() {
//         currentDoggo.isGoodDog = !currentDoggo.isGoodDog
//             fetch(`http://localhost:3001/pups/${currentDoggo.id}`,{
//                 method: 'PATCH',
//                 headers: {
//                     'Content-Type' : 'application/json'
//                 },
//                 body: JSON.stringify({
//                     "isGoodDog" : currentDoggo.isGoodDog
//                 })
//              })
//              .then((resp) => resp.json())
//              .then((data) => onUpdate(data)
//              )
//     }

//     if(!currentDoggo) return<h2>Please Select a gahdamnn dog</h2>
//   return (
//     <>
//     <img src={currentDoggo.image} alt={currentDoggo.name}/>
//     <h2>{currentDoggo.name}</h2>
//     <button onClick={handlePatch}>{currentDoggo.isGoodDog ? "Good Little Nugget !" : "Bad Fucking Dog"}</button>
//     </>
//   )
// }
