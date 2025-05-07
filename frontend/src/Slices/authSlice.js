import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: localStorage.getItem("token") ? JSON.parse(localStorage.getItem('token')) : null,
  isLoggedIn: false,
  loading: false,
};


const authSlice = createSlice({
    name: "auth",
    initialState:initialState,
    reducers:{
        setUser(state,value){
            state.user = value.payload
        },
        setLoading(state,value){
            state.loading = value.payload
        },
        setToken(state,value){
            state.token = value.payload
        },
        setliggenin(state,value){
            state.isLoggedIn = value.payload
        }
    }
})

export const {setUser,setLoading,setToken,setliggenin} = authSlice.actions
export default authSlice.reducer