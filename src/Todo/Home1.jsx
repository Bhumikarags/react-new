// import React, { useEffect, useRef, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { CREATE } from './Reducer';

// export default function Home1() {
//     const dispatch=useDispatch();
//     const s=useSelector(state=>state.custom)
//     const[name,setName]=useState(null);
//     const[numb,setNumb]=useState(null);


//      useEffect(()=>{
          
//      })
//   return (
//     <>
//      <input type="text" placeholder='Name' onChange={(e)=>setName(e.target.value)}/>
//      <br/>
//     <button onClick={()=>dispatch(CREATE,{name:name,no:numb})}>add</button>
//      {
//         s.map((x)=>{
//            return(
//             <div>
//                 <h2>{x.name}</h2>
//                 <h3>{x.numb}</h3>
//                 <button>upd</button>
//                 <button>del</button>
//             </div>
//            )
//         })
//      }

//     </>
//   )
// }
// ===================================================

import React, { useState , useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { CREATE } from './Reducer';
export default function Home1() {
    const dispatch =useDispatch();
    const data = useSelector(state=>state.custom);
    console.log(data);
    const [val,setVal] = useState(null);
     
    //  useEffect(()=>{
        
    //  })
  
  return (
    <>
        <input type="text" onChange={(e)=>setVal(e.target.value)}/>
        <button onClick={()=>dispatch(CREATE(val))}>Add</button>
    
    </>
  )
}















