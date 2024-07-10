import React from 'react';

function Card({user, handleRemoveData ,id}) {
  return (
    <>
            <div className='w-48 h-full bg-sky-100 rounded-lg flex flex-col items-center p-2'>
                <div className='image w-[3vw] h-[3vw] rounded-full bg-blue-100 overflow-hidden '>
                    <img className='w-full h-full object-cover' src={user.image}  />
                </div>
                    <h1 className='mt-1 text-center leading-none text-xl font-semibold required'>{user.name}</h1>
                    <h4 className='opacity-40 mt-2 text-xs font-semibold'>{user.email}</h4>
                    <p className='mt-2 text-center text-xs font-semibold leading-1 tracking-tight'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium sequi minus neque.</p>
                    <button onClick={()=>handleRemoveData(id)} className='mt-4 px-3 py-1 bg-red-600 text-xs rounded-md font-semibold text-white '>Remove it</button>
                </div>
            
    </>
  )
}

export default Card;