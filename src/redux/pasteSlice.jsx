import { createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast';

const initialState = {
    pastes: localStorage.getItem('pastes') 
    ? JSON.parse(localStorage.getItem('pastes')) 
    : []
}

export const pasteSlice = createSlice({
  name: 'paste',
  initialState,
  reducers: {
    addToPaste: (state,action) => {

      const paste=action.payload;

      // Add check --> Paste already exists wala case

      state.pastes.push(paste);
      localStorage.setItem('pastes',JSON.stringify(state.pastes));
      toast("Paste created successfully");

    
    },
    updateToPaste: (state,action) => {
        const paste=action.payload;
        const index=state.pastes.findIndex((item)=> item._id===paste._id);

        if(index>=0){
            state.pastes[index]=paste;
            localStorage.setItem('pastes',JSON.stringify(state.pastes));
            toast("Paste updated successfully");
        }

        
      
    },
    resetAllPaste: (state, action) => {

      state.pastes=[];
      localStorage.removeItem('pastes');
      toast("All pastes deleted successfully");
     
    },
    removeFromPaste:(state,action) => {

      const pasteId=action.payload;
      const index=state.pastes.findIndex((item)=> item._id===pasteId);

      if(index>=0){
       
        state.pastes.splice(index,1);
        localStorage.setItem('pastes',JSON.stringify(state.pastes));
        toast("Paste deleted successfully");

      }
       
    },

  },
})

// Action creators are generated for each case reducer function
export const { addToPaste, updateToPaste, resetAllPaste,removeFromPaste } = pasteSlice.actions

export default pasteSlice.reducer