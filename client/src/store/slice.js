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
        appointment:{
            first_name:"",
            last_name:"",
            contact:"",
            age:"",
            date:""

        },
        contact:{
            name:"",
            email:"",
            phone_no:"",
            message:""

        },
        mobilenav:false,Dlist:[],airesponse:"",aiquestions:{
            queries:""
        }
        
    },
    reducers:{
    setbackendemail2(state,action){
            state.backendemail2=action.payload;
        },
        setairesponse(state,action){
            state.airesponse=action.payload;
        },
        setmobilenav(state,action){
            state.mobilenav=action.payload;
        },
        setlogininfo2(state,action){
            const {name,value}=action.payload;
            state.logininfo2[name]=value;
        },
        setaiquestions(state,action){
            const {name,value}=action.payload;
            state.aiquestions[name]=value;

        },
        setformtype(state,action){
            state.formtype=action.payload;
        },
        setappointment(state,action){
            const {name,value}=action.payload;
            state.appointment[name]=value
        },
        setDlist(state,action){
            state.Dlist=action.payload;
        },
        setcontact(state,action){
            const {name,value}=action.payload;
            state.contact[name]=value;

        }
       
    }
})
export const control=userslice.actions;
export default userslice.reducer;