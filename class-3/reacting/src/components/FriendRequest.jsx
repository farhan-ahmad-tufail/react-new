import React from 'react'


// function FriendReq({image,name,Profession}) {
function FriendReq({values,index,handleClick}) {
    const {name,image, Profession,friends} = values;

  return (
    <div className='w-52 bg-zinc-100 rounded-md overflow-hidden '>
        <img className='w-full h-40 object-cover object-center bg-sky-200' src={image}  />
        <div className='w-full p-3'>
            <h3 className='font-semibold text-xl'>{name}</h3>
            <h5 className='text-xs mt-1'>{Profession}</h5>
            <button onClick={() => handleClick(index)} className={`px-3 py-1 mt-3 text-xs text-white ${friends ? "bg-green-500" : "bg-blue-500"} rounded-md font-semibold`}>
                {friends === true ? "Friend" : "Add Friend"}</button>
        </div>
    </div>
  )
}

export default FriendReq;