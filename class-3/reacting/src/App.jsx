// import { useState } from 'react';
// import FriendReq from './components/FriendRequest'

// function App() {

//     const userData = [
      
//       {name: 'Taylor', Profession:'Developer', image: 'https://plus.unsplash.com/premium_photo-1668319915384-3cccf7689bef?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', friends:false,},
//       {name: 'El', Profession: 'Coder', image: 'https://plus.unsplash.com/premium_photo-1670282393309-70fd7f8eb1ef?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', friends:false,},
//       {name: 'Grorge', Profession:'Artist', image: 'https://images.unsplash.com/photo-1548454782-15b189d129ab?q=80&w=2788&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', friends:false,},
//       {name: 'Sarah', Profession:'Dancer', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=2788&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', friends:false,},
//     ];

//     const [realData, setRealData] = useState(userData);
   
//     //state jahan bandti hai whi modufy ki jaa sakti hai, here state is in APP and out button is in the component

//     const handleClick = (changingIndex) => {
//       setRealData((prev) => {
//         return prev.map((item,index)=>{
//           if(index === changingIndex) return {...item, friends: !item.friends}
//           return item;
//         })
//       })
//     };



//   return (
//     <>
//       <div className='w-full h-screen bg-zinc-600 flex justify-center items-center gap-6'>
//           {realData.map((items,ind)=>(
//             // <FriendReq  image = {items.image} name={items.name} Profession={items.Profession}></FriendReq>
//             <FriendReq key={ind} index={ind} handleClick={handleClick} values={items}></FriendReq>
//           ))

//           }
//       </div>
//     </>
//   )
// }

// export default App;


import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Cards from './components/Cards';

function App() {

    const users = [
      
      {name: 'Challenger', artist:'Honey', image: 'https://plus.unsplash.com/premium_photo-1668319915384-3cccf7689bef?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', added:false,},
      {name: 'Baby', artist: 'Blackpink', image: 'https://plus.unsplash.com/premium_photo-1670282393309-70fd7f8eb1ef?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', added:false,},
      {name: 'One Direction', artist:'Zayn', image: 'https://images.unsplash.com/photo-1548454782-15b189d129ab?q=80&w=2788&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', added:false,},
      {name: 'One Love', artist:'Shubh', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=2788&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', added :false,},
    ];

   const [songData, setSongData] = useState(users);

   const handleClick = (fromBtnIndex) => {

   setSongData((prev) => { 
    return prev.map((item,itemIndex) => {
      if(itemIndex === fromBtnIndex) return {...item, added: !item.added}
      return item;
      })
   })
  }

  return (
    <>
      <div className='w-full h-screen bg-zinc-300'>
        
        <Navbar data={songData} />

        {/* cards components */}
        <div className='px-20 mt-10 flex flex-wrap gap-x-4 gap-y-14 '>
          {songData.map((elem,ind) => {
            return (
              <Cards key={ind} data={elem} handleClick={handleClick} index ={ind}/>
            )  // here data is the props passed to Cards component. it is an object containing name, artist, and image properties.
          }
          )}
        </div>
      </div>
    </>
  )
}

export default App;


