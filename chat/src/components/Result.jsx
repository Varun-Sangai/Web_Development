import React from "react";
import Typewriter from "typewriter-effect"
export default function Res({result})
{
    return(
    <div>
     <h3 className="result-text">
      <Typewriter 
        options={{
        autoStart:true,
        loop:false,
        delay:5,
        cursor:"",
        strings:result.length > 0 ? result : ""
      }}
      />
      </h3>
    </div>
    );
}