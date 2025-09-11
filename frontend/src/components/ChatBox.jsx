import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../assets/assets'

const ChatBox = () => {
  const {selectedChats,theme} = useContext()
  const [messages,setMessages] = useState([])
  const [loading,setLoading] = useState(false)

  useEffect(()=>{
    if(selectedChats){
      setMessages(selectedChats.messages)
    }
  },[selectedChats])

  return (
    <div className='flex-1 flex  flex-col justify-between m-5 md:m-10 xl:mx-30 max-md:mt 2xl:pr-40'>


      {/* chat messages */}
      <div className='flex-1 mb-5 overflow-scroll'>
        {messages.length === 0 && (
          <div className='h-full flex flex-col items-center justify-center gap-2 text-primary'>
            <img className='w-full max-w-56 sm:max-w-68' src={theme === "dark" ? assets.logo_full : assets.logo_full_dark}/>
            <p className='mt-5 text-4xl sm:text-6xl text-center text-gray-400 dark:text-white'>Ask me anything.</p>
          </div>
        )}
      </div>

      {/* Promt Input Box */}
      <form>

      </form>

    </div>
  )
}

export default ChatBox