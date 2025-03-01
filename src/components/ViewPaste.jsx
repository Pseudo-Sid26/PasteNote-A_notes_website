import React, { useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToPaste, updateToPaste } from '../redux/pasteSlice';
import { useEffect } from 'react';

const ViewPaste = () => {

   const {id} = useParams();
   const allPastes = useSelector((state) => state.paste.pastes);
    
   const paste = allPastes.filter((p)=> p._id === id)[0];


  return (
    <div>
      <div className='flex flex-row gap-5 place-content-evenly'>
        <input
          className='p-2 rounded-2xl mt-2 bg-blue-200 text-blue-900'
          type="text"
          placeholder='Enter title here'
          value={paste.title}
          disabled
          onChange={(e) => setTitle(e.target.value)} />

        {/* <button onClick={createPaste}
          className='p-2 rounded-2xl mt-2 '>
          {
            pasteId ? 'Update paste' : 'Create paste'
          }
        </button> */}
      </div>

      <div className='mt-5'>
        <textarea
          className='rounded-2xl p-2 min-w-[500px] bg-blue-200 text-blue-900'
          value={paste.content}
          placeholder='Enter content here'
          disabled
          onChange={(e) => setValue(e.target.value)} 
          rows={20}
        />
      </div>
    </div>
  )
}

export default ViewPaste
