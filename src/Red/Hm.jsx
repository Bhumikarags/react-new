import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { INC,DEC,BY } from './Red';

export default function Hm() {
    const dispatch= useDispatch();
    const c = useSelector(state=>state.custom.c);

  return (
   <>
    <h1>{c}</h1>
   <button onClick={()=>dispatch(INC())}>Inc</button>
   <button onClick={()=>dispatch(DEC())}>Decc</button>
   <button onClick={()=>dispatch(BY({val:20}))}>IncBy val</button>
   </>
  )
}
