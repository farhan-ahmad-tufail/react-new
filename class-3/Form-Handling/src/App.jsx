// import React, { useRef } from 'react'

// // useRef - we select all the input aur unki value tab nikalte hain jab submit hota hai
// function App() {

//  const name =  useRef(null);
//  const age =  useRef(null);
//  const email =  useRef(null);


//  //this will prevent the input from being selected by default when the user clicks on the input field instead (ab submit nhi kar sakte)

//  const handleSubmit = (e) => {
//    e.preventDefault();
//    console.log(name.current.value, age.current.value, email.current.value);
//  }

//   return (
//     <form action='' onSubmit={handleSubmit}>
//       <input ref={name} type="text" placeholder='name' />
//       <input ref={age} type="text" placeholder='age' />
//       <input ref={email} type="text" placeholder='email' />
//       <input type="submit" />
//     </form>
//   )
// }

// export default App;

//------------------------------------------------------------------------------method 3 of file handling 

// import React from 'react'
// import { useForm } from'react-hook-form'

// function App() {
//   //useForm give two things - register and handleSubmit
//   const {register,handleSubmit} = useForm();

//   return (
//     <div>
//       <form action="" onSubmit={handleSubmit(data => console.log(data))}>
//         <input {...register('name')} type="text" placeholder='name' />
//         <input {...register('email')} type="email" placeholder='email' />
//         <input type="submit" />
//       </form>
//     </div>
//   )
// }

// export default App



import React, { useState } from 'react'
import Cards from './Components/Cards'
import Form from './Components/Form'


function App() {

  const [users,setUsers] = useState([]);

  const handleSubmitData = (data) => {
    setUsers([...users, data]);
  }

  const handleRemoveData = (id) => {
    setUsers(()=>users.filter((item,index) => index !=id))
  
  }

  return (
    <div className='w-full h-screen bg-zinc-200 flex items-center justify-center'>
      <div className='container mx-auto'>
          <Cards users={users} handleRemoveData={handleRemoveData} />
          <Form handleSubmitData = {handleSubmitData} />
      </div>
    </div>
  )
}

export default App