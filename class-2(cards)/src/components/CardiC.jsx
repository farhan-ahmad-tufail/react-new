//props -> is used to resuse the component
/// props use•hote hai•aapke•components ko reusable ke liye, consider
//karo aapke paas ek button ahi aapko us •button•ko alag alag jagah daalna hai app mein, 
// to aap ek button component banaaye and uska data hard coded
// karne•ki•jagah•parent component se send karde and•child•component par use karle


import React from 'react'

function CardiC({sendProps,color}) {
  return (

    <div>
        <button className= {`px-4 py-2 m-3 ${color} rounded-lg text-zinc-100 text-sm font-semibold`}>
            {sendProps}
        </button>
    </div>
  )
}

export default CardiC