import React from 'react';
import style from "./Style.module.css";

function Navbar({data}) {
  return (
    <div className='w-full px-20 py-3 flex justify-between items-center'>
        <h3 className={`${style.a} ${style.b}`}>Orange</h3>
        <div className='flex px-4 py-2 bg-orange-600 text-white rounded-md text-sm gap-3'>
            <h3>Favourites</h3>

            <h4>{data.filter(elem => elem.added).length}</h4>

        </div>

    </div>
  )
}

export default Navbar;