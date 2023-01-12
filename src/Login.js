import React from 'react';
import RegisterStyle from "./Register.module.css"
import { FaLock ,FaUserAlt} from "react-icons/fa";
import { useEffect,useState } from "react";
import Header from './Component/Header';
import Footer from './Component/Footer';
export default function Login() {
    const[password,setPassword]= useState("")
const[username,setUsername]= useState("")
const[uMes,setUMes]= useState("")
const[pwmessage,setPwMessage]= useState("")
const[newArr,setNewArr]= useState([])
const[newFilter,setNewFilter]= useState([])

let data;
useEffect(()=> {
  if(localStorage.getItem("list") || []){
     data = JSON.parse(localStorage.getItem("list"))
     console.log(data)
     setNewArr(data)
          
  }
},[])

  function capturepass(e){
    setPassword(e.target.value)
    const pwRegEx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,20}$/

    if (pwRegEx.test(password)) {
      setPwMessage("pw is Valid");
      } else if (!pwRegEx.test(password) && password !== " ") {
        setPwMessage("pw is Not Valid");
      } else {
        setPwMessage("");
      }
  }
  function captureuser(e){
    setUsername(e.target.value)
    const userRegEx= /^[a-zA-Z0-9]+([_\s/\-]?[a-zA-Z0-9])*$/
    

    if (userRegEx.test(username)) {
      setUMes("userName is Valid");
    } else if (!userRegEx.test(username) && username !== " ") {
      setUMes("userName is Not Valid");
    } else {
      setUMes("");
    }

  }

  function submit(event){
    event.preventDefault()
   
if(username=== ""){
  alert("Fill the User Details")
  

}else{

   const newFilter= newArr.filter(x=>x.Username.includes(username) )
   
   console.log(newFilter)
   setNewFilter(newFilter)
   for (let i = 0; i < newFilter.length; i++) {
    if(newFilter[i].Username === username && newFilter[i].Password === password){
        alert("You are logged in")
    }else{
        alert("New User You Can Register")
    }
   }
}
  }
    return(
        <>
      <Header />
        <div className={RegisterStyle.wrap}>
        <form className={RegisterStyle.box}>
       
        <div>
        <label><FaUserAlt style={{fontSize:"2em"}}/></label>
        <input value={username} onChange={captureuser} className={RegisterStyle.input}  placeholder="Username" type="text"/>
        <p style={{color:"white" ,textShadow:"2px 2px red"}}>{uMes}</p>
        </div>
        <div>
        <label><FaLock style={{fontSize:"2em"}}/></label>
        <input value={password} onChange={capturepass} className={RegisterStyle.input}  placeholder="Password" type="password"/>
        <p style={{color:"white" ,textShadow:"2px 2px r"}}>{pwmessage}</p>
        <div>
        <br/>
        <br/>
   
    <br/>
    <div className={RegisterStyle.button}>
       
    <button onClick={submit}>Login</button>
        <div><strong>New User you can go to </strong></div>
        
        </div>
        </div>
        </div>
        
        </form>
        
        </div>
        <Footer />
        </>
    )
}