import React from 'react'

function Card() {

    const data = [
      {Image:'https://images.unsplash.com/photo-1667543239971-7d8a0393b4ea?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',name:'Amazon',description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, quibusdrettam" },
      {Image:'https://images.unsplash.com/photo-1564186763535-ebb21ef5277f?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',name:'Guitar', description:"lorem ipsum dolor sit amet consectetur adipisicing el lore dolor sit amet consecm",},
      {Image:'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',name:'car', description:"Lorem ipsum dolor sit amet consectetur lorem con ipllentesque dolor sit amet consecf",},
      {Image:'https://images.unsplash.com/photo-1527295110-5145f6b148d0?q=80&w=2862&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',name:'train', description:"Lorem ipsum dolor sit amet  consectetur lorem ini lordolor sit amet amet conseonsecem",},
    ];


  return (
    <div className='w-full h-screen bg bg-zinc-400 flex justify-center items-center gap-10'>
       {data.map((val,ind)=> (
              <div key={ind} className='w-52 min-h-64 bg-zinc-100 rounded-md overflow-hidden'>
              <div className='w-full h-32 bg-zinc-400'>
                  <img className='w-full h-full object-cover' src={val.Image} />
              </div>
              <div className='w-full px-3 py4'>
                  <h2 className='font-semibold'>{val.name}</h2>
                  <p className='text-xs mt-5'>{val.description}</p>
              </div>

          </div>
       ))}
    </div>
  )
};

export default Card;