import React from 'react'
import Card from './Card'

function Cards({users, handleRemoveData}) {
  return (
    <div className='w-full max-h-96 overflow-auto  p-4 flex justify-center gap-4 flex-wrap'>
        {
          users.map((item, index) => {
              return <Card handleRemoveData={handleRemoveData} key={index} id={index} user={item}/>
          })
        }
        
    </div>
  )
}

export default Cards;