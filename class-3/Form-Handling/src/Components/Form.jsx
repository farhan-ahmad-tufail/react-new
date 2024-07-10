// import React from 'react';
// import { useForm } from 'react-hook-form';

// function Form({ handleSubmitData }) {
//   const { register, handleSubmit, reset, formState: { errors } } = useForm();

//   const handleFormSubmit = (data) => {
//     handleSubmitData(data);
//     reset(); // Reset form fields after submission
//   };

//   return (
//     <div className='mt-10 flex justify-center'>
//       <form className='flex flex-col gap-4' onSubmit={handleSubmit(handleFormSubmit)}>
//         <div>
//           <input 
//             {...register('name', { required: 'Name is required' })} 
//             className='rounded-md px-2 py-1 text-base font-semibold outline-none' 
//             type="text" 
//             placeholder='Name' 
//           />
//           {errors.name && <p className='text-red-500 text-xs'>{errors.name.message}</p>}
//         </div>
//         <div>
//           <input 
//             {...register('email', { required: 'Email is required' })} 
//             className='rounded-md px-2 py-1 text-base font-semibold outline-none' 
//             type="email" 
//             placeholder='Email' 
//           />
//           {errors.email && <p className='text-red-500 text-xs'>{errors.email.message}</p>}
//         </div>
//         <div>
//           <input 
//             {...register('image', { required: 'Image URL is required' })} 
//             className='rounded-md px-2 py-1 text-base font-semibold outline-none' 
//             type="text" 
//             placeholder='Image URL' 
//           />
//           {errors.image && <p className='text-red-500 text-xs'>{errors.image.message}</p>}
//         </div>
//         <input 
//           className='rounded-md px-5 py-1 bg-blue-500 text-white font-semibold' 
//           type="submit" 
//           value="Submit" 
//         />
//       </form>
//     </div>
//   );
// }

// export default Form;




import React from 'react';
import { useForm } from 'react-hook-form';

function Form({handleSubmitData}) {

  const {register, handleSubmit, reset} = useForm()
  
  const handleFormSubmit = (data)=>{
     handleSubmitData(data)
     reset(); //reset form fields after submission
  }


  return (
    <div className='mt-10 flex justify-center'>
        <form className='flex gap-10' onSubmit={handleSubmit(handleFormSubmit)}>
            <input {...register('name')} required className='rounded-md px-2 py-1 text-base font-semibold outline-none' type="text" placeholder='name' />
            <input {...register('email')} required className='rounded-md px-2 py-1 text-base font-semibold outline-none' type="email" placeholder='email' />
            <input {...register('image')} required className='rounded-md px-2 py-1 text-base font-semibold outline-none' type="url" placeholder='image Url' />
            <input className='rounded-md px-5 py-1 bg-blue-500 text-white font-semibold' type="submit" value="Submit" />

        </form>
    </div>
  )
}

export default Form