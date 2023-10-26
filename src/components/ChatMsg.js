import React from 'react'

const ChatMsg = ({name, message}) => {
  return (
    <div className='flex items-center shadow-lg p-1 m-2'>
        <img
            className="h-10"
            src="https://th.bing.com/th/id/R.6b0022312d41080436c52da571d5c697?rik=ejx13G9ZroRrcg&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fuser-png-icon-young-user-icon-2400.png&ehk=NNF6zZUBr0n5i%2fx0Bh3AMRDRDrzslPXB0ANabkkPyv0%3d&risl=&pid=ImgRaw&r=0"
            alt="user logo" />
        <span className='font-bold px-2'>{name}</span>
        <span>{message}</span>
        
    </div>
  )
}

export default ChatMsg