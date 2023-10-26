import React, { useEffect, useState } from 'react'
import ChatMsg from './ChatMsg'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice'
import { generateRandomName, makeRandomMessage } from '../utils/helper'

const data = []
const LiveChat = () => {

    const dispatch = useDispatch();
    const chatMessages = useSelector((store) => store.chat.messages)
    const [liveMessage, setLiveMessage] = useState("");

    useEffect(() =>{
        const interval = setInterval(()=>{
            //API polling 
            dispatch(
                addMessage({
                    name: generateRandomName(),
                    message: makeRandomMessage(20) + " 🚀",
                  })
            );
        }, 500);    

        return () => clearInterval(interval)
    }, []);

    return (
        <>
          <div className="w-full h-[315px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
            <div>
              {
                // Disclaimer: Don't use indexes as keys
                chatMessages.map((c, i) => (
                  <ChatMsg key={i} name={c.name} message={c.message} />
                ))
              }
            </div>
          </div>
    
          { <form
            className="w-full p-2 ml-2"
            onSubmit={(e) => {
              e.preventDefault();
    
              dispatch(
                addMessage({
                  name: "Akshay Saini",
                  message: liveMessage,
                })
              );
              setLiveMessage("");
            }}
          >
            <input
              className="px-2 w-96 border border-black"
              type="text"
              value={liveMessage}
              onChange={(e) => {
                setLiveMessage(e.target.value);
              }}
            />
            <button className="px-2 mx-2 bg-green-100">Send</button>
          </form>}
        </>
      );
}

export default LiveChat