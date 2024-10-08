import React from 'react'
import { Textarea } from "@/components/ui/textarea"

function TextAreaField({item,handleInputChange,carInfo}){
  console.log(carInfo)
  return (
    <div>
      <Textarea  name={item?.name} required={item?.required} 
      defaultValue={carInfo[item?.name]}
      onChange={(e)=>handleInputChange(item?.name,e.target.value)}  />
    </div>
  )
}

export default TextAreaField
