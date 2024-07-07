import React from 'react'

function Card() {

    const data = [
      {Image:'https://images.unsplash.com/photo-1667543239971-7d8a0393b4ea?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',name:'Amazon',description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, quibusdrettam",instock:true, },
      {Image:'https://images.unsplash.com/photo-1564186763535-ebb21ef5277f?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',name:'Guitar', description:"lorem ipsum dolor sit amet consectetur adipisicing el lore dolor sit amet consecm",instock:false,},
      {Image:'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',name:'car', description:"Lorem ipsum dolor sit amet consectetur lorem con ipllentesque dolor sit amet consecf",instock:false,},
      {Image:'https://images.unsplash.com/photo-1527295110-5145f6b148d0?q=80&w=2862&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',name:'train', description:"Lorem ipsum dolor sit amet  consectetur lorem ini lordolor sit amet amet conseonsecem",instock:true,},
    ];

    /*
      const clickHandler = (instock) => {
      alert(instock ? 'In Stock' : 'Out of Stock');
    };
    
    */


    const clickHandler = (instock) => {
      if (!instock) {
        alert('Out of Stock');
      }
    };

  return (
    <div className='w-full h-screen bg bg-zinc-500 flex justify-center items-center gap-10'>
       {data.map((val,ind)=> (
              <div key={ind} className='w-52 min-h-72 bg-zinc-100 rounded-md overflow-hidden'>
              <div className='w-full h-32 bg-zinc-400'>
                  <img className='w-full h-full object-cover' src={val.Image} />
              </div>
              <div className='w-full px-3 py-4'>
                  <h2 className='font-semibold mt-1'>{val.name}</h2>
                  <p className='text-xs mt-3 mb-3'>{val.description}</p>
                  <button onClick={ () => clickHandler(val.instock)} className= {`text-xs px-4 py-1 ${val.instock ? 'bg-blue-600' : 'bg-red-600'} text-xs text-zinc-100 rounded`}>
                    {val.instock ? "In Stock" : "Out of Stock" }
                    </button>
              </div>

          </div>
       ))}
    </div>
  )
};

export default Card;
