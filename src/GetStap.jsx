import React from "react";
import { Passo1 } from "./Passo1";
import { Passo2 } from "./Passo2";
import { Passo3 } from "./Passo3";
import { Passo4 } from "./Passo4";

export function GetStep({passo,...props}){
   
    let component = <Passo1 {...props}/>

    if(passo === 2){
      component = <Passo2 {...props} />
    }
    if(passo === 3){
      component = <Passo3 {...props} />
    }
    if(passo === 4){
        component = <Passo4 {...props} />
      }
      return (
        <div>
        {component}
        <div className="button-step">
        <button onClick={props.goBack} className="go-back">Go Back</button>
         <button onClick={props.nextStep} className="next-step">Next Step</button>
        </div>
       </div>
     
      )
  }

  



  