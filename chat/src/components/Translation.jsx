import React from "react";
import Typewriter from "typewriter-effect"
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import { useState } from "react";
import Sty from "./Sty";
import Res from "./Result";
import InfiniteCube from "./InfiniteCube.jsx";
export default function Translation({ doStuff, setInput, result,input,setResult }) {
  const [flag, setFlag] = useState(false);
  const [flagr, setFlagr] = useState(false);
  function assi(e)
  {
     setFlag(false);
     setFlagr(false);
     setResult("");
     setInput(e.target.value);
  }
  function ssi()
  {
     setFlag(true);
     doStuff();
     setFlagr(true);
  }
  return (
    <div>
      {flag?<Sty input={input}/>:""}
      <div className="bott">
      <div className="bo">
      <textarea 
        className="text-area"
        cols={100}
        rows={1}
        placeholder="Type Here..."
        onChange={(e)=> assi(e)}
      ></textarea>
      
      <button className="act" onClick={ssi}>
          <SendOutlinedIcon/>
      </button>
      </div>
      </div>
      {flagr?result.length===0?<InfiniteCube/>:<Res result={result}/>:""}
    </div>
  );
}
