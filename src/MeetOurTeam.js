import React from 'react'
import team from "./MeetOurTeam.module.css"
import Trainer from './Trainer';
import { NavLink } from "react-router-dom";

function MeetOurTeam() {
    
  return (
    
    <div 
    id='meet' className={team.container}>
      <div className={team.innercontainer}>
        <h3>Meet our Team</h3>
        <p>We are team if experience people nutrion, <br/>sport and fitness xperts passinate with  talent knowledge and <br/>knowledge unsurpsassed the industry get to know us</p>
        <div className={team.img} style={{display:"flex"}}>
            <Trainer 
            img="https://images.everydayhealth.com/images/ehfc-tricks-to-help-you-start-working-out-1440x810.jpg"
            name="shubhali"
            age="30"
            />
              <Trainer
      img="https://thumbs.dreamstime.com/b/african-personal-trainer-helping-men-to-fill-membership-form-health-club-47294389.jpg"
      name="ram"
      age="26"
      />
       <br/>  
      <Trainer
      img="data:image/jpeg;base64,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"
   
      name="sam"
      age="30"
      />
       <br/>  <br/>   <br/>
      <Trainer
      img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2St-V8D3hK-FmQOC-b5WUIJtk_-cUCy8QOQ&usqp=CAU'
      name="ronny"
      age="30"
      />
         </div>
         <div className={team.btn}>
         <NavLink to="/Trainers" className="btn btn-outline-dark">
              See All Team
            </NavLink>
            </div>
        
      </div>
    </div>
   
  )
}

export default MeetOurTeam
