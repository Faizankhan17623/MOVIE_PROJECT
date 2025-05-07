import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user:null,
    loading:false,
}


const ProfileSlice = createSlice({
    name:"Profile",
    initialState:initialState,
    reducers:{
        setUser:(state,value)=> {
            state.user = value.payload
        },
        setloading:(state,value)=>{
            state.loading  = value.payload
        }
    }
})



export const{setUser,setloading} = ProfileSlice.actions


export default ProfileSlice.reducer