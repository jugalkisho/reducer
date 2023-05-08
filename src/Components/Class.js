// import React, { Component } from "react";
// class Jugal extends Component {
//     render() {
//         return (
//             <>
//                 <h2>Hy</h2>
//             </>
//         )
//     }
// }
// export default Jugal;
import React, { useState } from "react";

function Jugal()
{
    const [status,setStatus]=useState(true);
  
    return(<>
      {
        status?
        <h2>True</h2>:
        null
    }
         <h2>Jugal Kishore</h2>
         <button onClick={()=>setStatus(true)}>Show</button>
         <button onClick={()=>setStatus(false)}>Hide</button>
   </>
    )
    }

export default Jugal;