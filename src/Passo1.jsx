import React from "react";
import { useState } from "react";

export function Passo1 ({nextStep, goBack}) {

    const [pessoa, setPessoa] = useState({
      name: "",
      email: "",
      phone: "",
    })
   
    
    return (
       <div className="infor-peaple">
            
            <div className="personal info">
            <h2>Personal Info</h2>
            <p>Please provide your name email adress, and phone number.</p>
            <label htmlFor="nome-titular">Name</label>
            <input
              type="text"
              placeholder="name..."
              id="name"
              value={pessoa.name}
              onChange={(e) => setPessoa({...pessoa, name: e.target.value})}
            />
          </div>
          <div className="email">
            <label htmlFor="emailAndress">Email Anddress</label>
            <input
              type="text"
              placeholder="email..."
              id="name"
              value={pessoa.email}
              onChange={(e) => setPessoa({...pessoa, email: e.target.value})}
            />
          </div>
          <div className="phone">
           <label htmlFor="emailAndress">Phone Number</label>
            <input
              type="number"
              placeholder="+55 9 ********"
              id="phone"
              value={pessoa.phone}
              onChange={(e) => setPessoa({...pessoa, phone: e.target.value})}
            />
          </div>
           
         </div>

    
    );     
    
};

