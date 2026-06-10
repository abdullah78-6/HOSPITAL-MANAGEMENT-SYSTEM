import {createSlice} from "@reduxjs/toolkit"
const adminslice=createSlice({
    name:"admin",
    initialState:{
        loginstatus:false,navbarclass:"",backendemail:"",
        logininfo:{
            email:"",
            password:""
        }
    },
    reducers:{
        setloginstatus(state,action){
            state.loginstatus=action.payload;
        },
        setnavbarclass(state,action){
            state.navbarclass=action.payload;
        },
        setbackendemail(state,action){
            state.backendemail=action.payload;
        },
        setlogininfo(state,action){
            const {name,value}=action.payload;
            state.logininfo[name]=value;
        }
    }
})
export const control=adminslice.actions;
export default adminslice.reducer;