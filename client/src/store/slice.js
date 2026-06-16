import {createSlice} from "@reduxjs/toolkit"
const userslice=createSlice({
    name:"user",
    initialState:{
        backendemail2:"",formtype:"login",
        logininfo2:{
            name:"",
            email:"",
            password:""
        },
        
    },
    reducers:{
    setbackendemail2(state,action){
            state.backendemail2=action.payload;
        },
        setlogininfo2(state,action){
            const {name,value}=action.payload;
            state.logininfo2[name]=value;
        },
        setformtype(state,action){
            state.formtype=action.payload;
        }
       
    }
})
export const control=userslice.actions;
export default userslice.reducer;