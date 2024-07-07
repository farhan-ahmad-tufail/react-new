import React, { useState } from 'react';

function CardiB() {
    const [val,setVal] = useState(false);

    //useState returns 2 values -> 
    //1st value (val) is the data and the second value is the function which can modify the value (setter fucntion).
    //useState initializes the initial value in the bracket which is also the value / data (val)
    // console.log(val); ------------------------> returns data

  return (
    <div className='p-10 '>
        <h1 className='font-semibold '>{val === false ? "Galat hai!" : "Sahi hai!"}</h1>
        <button onClick={() => {setVal(() => !val)}} className={`px-2 py-1 mt-4 rounded-md font-bold text-white ${val === false ? "bg-red-700" : "bg-green-700"}`} >Change</button>
    </div>
  )
}

export default CardiB;