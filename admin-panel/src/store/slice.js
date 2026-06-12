import {createSlice} from "@reduxjs/toolkit"
const adminslice=createSlice({
    name:"admin",
    initialState:{
        loginstatus:false,navbarclass:"",backendemail:"",
        logininfo:{
            email:"",
            password:""
        },
        patientdetails:{
            name:"",
            phone_no:"",
            disease:"",
            age:"",
            admitdate:"",
            bill:""


        },
        departments:{
            department_name:"",
            department_doctor:"",
            department_details:""
        },
        Illlist:[]
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
        },
        setpatientdetails(state,action){
            const {name,value}=action.payload;
            state.patientdetails[name]=value;
        },
        setIlllist(state,action){
            state.Illlist=action.payload;
            

        },
        setdepartments(state,action){
            const {name,value}=action.payload;
            state.departments[name]=value;
        }
    }
})
export const control=adminslice.actions;
export default adminslice.reducer;