//import { Button } from "bootstrap";
import React, { useState } from "react";
function Apple()
{
    const [name,setName]=useState("Jugal")
    function Appl()
    {
        setName("kishore");
    }
    return(
        <>
        <h1>{name}</h1>
<button onClick={Appl}>Click Me</button>
</>
    )
}
export default Apple;