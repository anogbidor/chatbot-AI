import { useState } from 'react'

type Message = {
  text: string
  sender: 'user' | 'bot'
}

export default function Home() {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState<string>('')

  // Handle sending a message
  const sendMessage = (): void => {
    if (!input.trim()) return

    const newMessage: Message = { text: input, sender: 'user' }
    setMessages((prev) => [...prev, newMessage]) // Update chat history
    setInput('') // Clear input field

    // Placeholder response from bot
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { text: 'Hello! How can I assist you?', sender: 'bot' },
      ])
    }, 1000)
  }

  return (
    <div className='flex flex-col h-screen bg-gray-100'>
      {/* Chat Container */}
      <div className='flex-1 overflow-y-auto p-4'>
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-2 rounded-lg mb-2 max-w-xs ${
              msg.sender === 'user'
                ? 'bg-blue-500 text-white self-end ml-auto'
                : 'bg-gray-300 text-black self-start'
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      {/* Chat Input */}
      <div className='p-4 bg-white border-t'>
        <div className='flex'>
          <input
            type='text'
            className='flex-1 p-2 border rounded-lg outline-none'
            placeholder='Type a message...'
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && sendMessage()} // Replaced deprecated onKeyPress
          />
          <button
            onClick={sendMessage}
            className='ml-2 bg-blue-500 text-white px-4 py-2 rounded-lg'
          >
            Send
          </button>
        </div>
      </div>
    </div>
  )
}
