import React from 'react';

function Cards({data,handleClick,index}) {
    const {image, artist, name, added} = data;

  return (
    <div className='w-60 bg-zinc-100 p-4 rounded-md flex gap-4 pb-10 relative'>
        <div className='w-20 h-20 bg-orange-600 rounded-md overflow-hidden'>
            <img className='w-full h-full object-cover' src={image}  />
        </div>
        <div className='flex gap-1 flex-col'>
            <h3 className='text-xl font-semibold leading-none' >{name}</h3>
            <h6 className='text-sm '>{artist}</h6> 
        </div>
            <button onClick={()=>handleClick(index)} className={`px-4 py-3 whitespace-nowrap ${added === false ? "bg-orange-600" : "bg-teal-600"} absolute bottom-0 left-1/2  transform -translate-x-1/2 translate-y-1/2 rounded-full text-xs  text-white`}>
            {added === false ? "Add to Favorites" : "Added"}
            </button>
        </div>
  )
}

export default Cards;