import React from 'react'

function DogBar({ puppies, onClick }) {

    const DogNav = puppies.map((puppy) => {
        return (
        <span key={puppy.id} onClick={() => onClick(puppy)}>
        {puppy.name}
        </span>
        )
    })
    

  return (
    <>
    {DogNav}
    </>
  )
}

export default DogBar