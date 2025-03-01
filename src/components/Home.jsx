import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToPaste, updateToPaste } from '../redux/pasteSlice';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const Home = () => {

  const [title, setTitle] = React.useState("");
  const [value, setValue] = React.useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const pasteId = searchParams.get('pasteId');
  const dispatch = useDispatch();
  const allPastes = useSelector((state) => state.paste.pastes);

  useEffect(() => {
    if (pasteId) {
      const paste = allPastes.find((item) => item._id === pasteId);
      if (paste) {
        setTitle(paste.title);
        setValue(paste.content);
      }

    }
  }, [pasteId])

  function createPaste() {
    const paste = {
      title: title,
      content: value,
      _id: pasteId ||
        Date.now().toString(36),
      createdAt: new Date().toISOString(),
    }

    if (pasteId) {
      //update
      dispatch(updateToPaste(paste));
    }
    else {
      //create
      dispatch(addToPaste(paste));
    }

    //after creation / updation
    setTitle('');
    setValue('');
    setSearchParams('');
  }

  return (
    <div>
      <div className='flex flex-row gap-5 place-content-evenly'>
        <input
          className='p-2 rounded-2xl mt-2 bg-blue-200 text-blue-900'
          type="text"
          placeholder='Enter title here'
          value={title}
          onChange={(e) => setTitle(e.target.value)} />

        <button onClick={createPaste}
          className='p-2 rounded-2xl mt-2 bg-blue-200 text-blue-900'>
          {
            pasteId ? 'Update paste' : 'Create paste'
          }
        </button>
      </div>
      <div className='mt-5'>
        <textarea
          className='rounded-2xl p-2 min-w-[500px] bg-blue-100 text-blue-900'
          value={value}
          placeholder='Enter content here'
          onChange={(e) => setValue(e.target.value)}
          rows={20}
        />
      </div>
    </div>
  )
}

export default Home
