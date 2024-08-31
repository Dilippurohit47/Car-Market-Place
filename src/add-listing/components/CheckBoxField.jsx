import React from 'react'
import { Checkbox } from "@/components/ui/checkbox"

const CheckBoxField = ({item}) => {
  return (
    <div>
      <Checkbox name={item?.name}   />
    </div>
  )
}

export default CheckBoxField
