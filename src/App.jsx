// import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { DECREMENT, INCREAMENT, INCREAMENT_BY_VALUE } from './Reducers/UserReducer';

// export default function App() {
//   const data = useSelector(state=>state.main.count);
//   const dispatch = useDispatch();

//   const incrementByValue = () =>{
//     const val = parseInt(prompt("Enter the value-"));
//     dispatch(INCREAMENT_BY_VALUE({value:val}))
//   }
//   return (
//     <>
//         <h2>{data}</h2>
//         <button onClick={()=>{
//           dispatch(INCREAMENT())
//         }}>Increment</button><br />

//         <button onClick={()=>{
//           dispatch(DECREMENT())
//         }}>decrement</button><br />

//         <button onClick={incrementByValue}>
//           BY VALUE
//         </button>
//     </>
//   )
// }

// import React from 'react'
// import Home1 from './Todo/Home1'
// // import Hm from './Red/Hm'

// export default function App() {
//   return (
//    <>
//    {/* <Hm/> */}
//    <Home1/>
//    </>
//   )
// }

import React from 'react'

export default function App() {
  return (
    <div>App</div>
  )
}
