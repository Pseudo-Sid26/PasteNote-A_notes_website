import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { removeFromPaste } from '../redux/pasteSlice'
import toast from 'react-hot-toast'

const PasteList = () => {

  const pastes = useSelector((state) => state.paste.pastes);
  console.log(pastes);
  const [searchTerm, setSearchTerm] = useState('');

  const dispatch = useDispatch();

  const filteredData = pastes.filter((paste) =>
    paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  function handleDelete(pasteId) {
    dispatch(removeFromPaste(pasteId));
  }


  return (
    <div>
      <input
        className='p-2 rounded-2xl w-[600px] mt-5 bg-blue-200 text-blue-900'
        type="search"
        placeholder='Enter title to search'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className='flex flex-col gap-5 mt-5 bg-blue-200 text-blue-900'>
        {
          filteredData.length > 0 &&
          filteredData.map(
            (paste) => {

                return (
                <div className='border m-2' key={paste._id}>
                  <div>
                  {paste.title}
                  </div>

                  <div>
                  {paste.content}
                  </div>

                  <div className='flex flex-row gap-4 place-content-evenly m-2 border-amber-50'>

                  <button>
                    <a href={`/?pasteId=${paste?._id}`}>
                    Edit
                    </a>
                  </button>

                  <button>
                    <a href={`/pastes/${paste._id}`}>
                    View
                    </a>
                  </button>

                  <button onClick={() => handleDelete(paste._id)}>
                    Delete
                  </button>

                  <button onClick={() => {
                    navigator.clipboard.writeText(paste.content)
                    toast.success("Copied to clipboard");
                  }}>
                    Copy
                  </button>

                  <button onClick={() => {
                    navigator.share({
                    title: paste.title,
                    text: paste.content,
                    url: window.location.href
                    })
                    toast.success("Shared successfully");
                  }}>
                    Share
                  </button>

                  </div>
                  <div>
                  {new Date(paste.createdAt).toLocaleDateString('en-GB', {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric'
                  }).replace(/ /g, '-')}
                  </div>
                </div>
                )

            }

          )

        }
      </div>
    </div>
  )
}

export default PasteList
