import React from 'react'
import Button from './Button'

const list = ["All","Gaming","Songs","Live","Soccer","Cricket","Feed",
             "All2","Gaming2","Songs2","Live2","Soccer2","Cricket2","Feed2"]

const ButtonList = () => {
  return (
    <div className='flex flex-wrap'>
    {
      list.map((item) => <Button key = {item} name={item}/>)
    }
    </div>
  )
}

export default ButtonList