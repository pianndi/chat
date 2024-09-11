import { Avatar, Button } from "@nextui-org/react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoArrowBackOutline, IoSend } from "react-icons/io5";
import { Link, useNavigate, useParams } from "react-router-dom";
import Message from "../components/Message";
import { useEffect, useRef } from "react";
import ButtonComponent from "../components/Button";
import ChatInput from "../components/ChatInput";
import Profile from "../components/Profile";
export default function ChatPage() {
  const chatRef = useRef(null)
  const { id } = useParams()
  const navigate = useNavigate()
  useEffect(() => {
    chatRef.current.scrollTop = chatRef.current.scrollHeight
  }, [])
  const messages = [{
    id: 1,
    message: 'Hello, how are you?Hello, how are you?Hello, how are you?Hello, how are you?Hello, how are you?Hello, how are you?Hello, how are you?Hello, how are you?Hello, how are you?Hello, how are you?Hello, how are you?Hello, how are you?',
    sender: 'John Doe',
    time: '12:00',
    isMe: false
  }, {
    id: 2,
    message: 'I am fine, thank you. How are you?',
    sender: 'Jane Doe',
    time: '12:01',
    isMe: true
  }, {
    id: 3,
    message: 'I am fine too, thank you.',
    sender: 'John Doe',
    time: '12:02',
    isMe: false
  },
  {
    id: 4,
    message: 'Test Link http://www.google.com with <div></div> tag',
    sender: 'John Doe',
    time: '12:00',
    isMe: false
  }, {
    id: 5,
    message: '*I am fine*, thank you. How are you?',
    sender: 'Jane Doe',
    time: '12:01',
    isMe: true
  }, {
    id: 6,
    message: 'I am fine too, _thank you._',
    sender: 'John Doe',
    time: '12:02',
    isMe: false
  },
  {
    id: 7,
    message: 'Hello, `how are you?`',
    sender: 'John Doe',
    time: '12:00',
    isMe: false
  }, {
    id: 8,
    message: 'I am fine, ```thank you.``` How are you?',
    sender: 'Jane Doe',
    time: '12:01',
    isMe: true
  }, {
    id: 9,
    message: '~I am fine too~, thank you.',
    sender: 'John Doe',
    time: '12:02',
    isMe: false
  },
  {
    id: 10,
    message: 'Hello, how are you?',
    sender: 'John Doe',
    time: '12:00',
    isMe: false
  }, {
    id: 11,
    message: 'I am fine, thank you. How are you?',
    sender: 'Jane Doe',
    time: '12:01',
    isMe: true
  }, {
    id: 12,
    message: 'I am fine too, thank you.',
    sender: 'John Doe',
    time: '12:02',
    isMe: false
  },
  {
    id: 13,
    message: 'Hello, how are you?',
    sender: 'John Doe',
    time: '12:00',
    isMe: false
  }, {
    id: 14,
    message: 'I am fine, thank you. How are you?',
    sender: 'Jane Doe',
    time: '12:01',
    isMe: true
  }, {
    id: 15,
    message: 'I am fine too, thank you.',
    sender: 'John Doe',
    time: '12:02',
  }
  ]
  return (
    <div className="conversation w-full h-full grid bg-lightGray overflow-y-auto">
      <div className="flex justify-between items-center bg-background w-full h-full z-20 border-b border-borderColor">
        <div className="flex items-center w-full pl-2 gap-1">
          <Link to='/' replace className="flex items-center text-xl py-2">
            <IoArrowBackOutline className="md:hidden" />
            <Profile name="J" alt="John Doe" size="md" className="h-full" />
          </Link>
          <Button onClick={() => navigate(`/msg/${id}/info`)} className="flex flex-col justify-center w-full h-full focus:outline-0 data-[pressed=true]:scale-1 text-start rounded-none items-start gap-0 hover:bg-borderColor py-2 px-1">
            <h1 className="font-semibold">John Doe</h1>
            <p className=" text-xs">Online</p>
          </Button>
          <div className="mr-2">
            <ButtonComponent >
              <BsThreeDotsVertical />
            </ButtonComponent>
          </div>
        </div>
      </div>
      <div className="h-full min-h-full flex flex-col w-full py-1 pt-2 overflow-y-auto" ref={chatRef}>
        {messages.map((message) => <Message key={message.id} {...message} />)}
      </div>
      <ChatInput />

    </div>
  )
}