import React from 'react'

function Cardi() {


  const data = [
    {name:"Dil chahta hain",description:"lorem ipsum dolor sit amet lorwm",},
    {name:"Mashallah Mashallah",description:"Tiger Zinda hai sit amet lorwm",},
    {name:"tere bin",description:"Tere Bin is a wondurful song by ipsum orwm",},
  ];


  const handleClickDownload = () => {alert("Downloaded done Successfully")};


  return (
    <div className='w-full h-screen bg-zinc-700 flex flex-col gap-10 items-center justify-center'>
      {data.map((elem,ind) => (
          <div className='song w-80 px-3 py-2 bg-zinc-100 rounded-md'>
          <h1 className='font-semibold text-xl'>{elem.name}</h1>
          <p className='text-xs mt-2 '>{elem.description}</p>
          <button onClick={handleClickDownload} className='bg-green-700 mt-4 text-sm font-semibold px-3 py-1 rounded-xl text-white items-center'>Download Now</button>
      </div>
      ))}
    </div>
  )
}

export default Cardi;