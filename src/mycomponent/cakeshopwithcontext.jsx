

import React, { createContext, useContext, useState } from 'react'

export const cakecontext = createContext()

export default function CakeShop() {
  const [cakepresent, setcakepresent] = useState(10)

  return (
    <cakecontext.Provider value= {{cakepresent, setcakepresent}}>
      {
        console.log(cakepresent)
      }
    <Cakecounter />
  </cakecontext.Provider>
  )
}

export const Cakecounter = () => {
  console.log(cakecontext.cakepresent)
  console.log(cakecontext)
  console.log(cakecontext._currentValue)
  const cakeinfo = useContext(cakecontext)
  console.log(cakeinfo)
  // console.log(cakeinfo.setcakepresent)
return (
  <>
  <br />
  <br />
  <h1>Cake Counter </h1>
  <h2>Number of cake availaible = {cakeinfo.cakepresent}</h2>
  <button className='btn btn-danger mx-3' onClick = {() => Sellcake(cakeinfo.cakepresent, cakeinfo.setcakepresent)}>Cake sold</button>
  <button className='btn btn-danger' onClick ={() => builtcake(cakeinfo.cakepresent, cakeinfo.setcakepresent)}> Cake built</button>
  </>
)
  
}


export function Sellcake(number, setnumber) {
   console.log(5)
   console.log(number)
 setnumber(number - 1)

  // return (
    
  //   <cakecontext.Provider value={number - 1}>
  //     <CakeShop/>
  //     <CakeShop/>
  //   </cakecontext.Provider>
  // )
  
}

export const builtcake = (number, setnumber) => {
      setnumber(number + 1)
  // return {
  //   numberOfCakes: numberOfCakes + 1
  // }
}
