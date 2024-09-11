import { IoSend } from "react-icons/io5";
import Button from "./Button";
import { useEffect, useRef, useState } from "react";
import EmojiPicker from "emoji-picker-react";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { FaKeyboard } from "react-icons/fa";
import { useSearchParams } from "react-router-dom";
import { text } from "framer-motion/client";
import { formatText, formatTextPreview } from "../utils/formatText";

export default function ChatInput() {
  const textRef = useRef()
  const formattedRef = useRef()
  const [searchParams, setSearchParams] = useSearchParams()
  const [emojiActive, setEmojiActive] = useState(false);
  const [message, setMessage] = useState(searchParams.get('msg') || '');

  const handleChange = (e) => {
    setMessage(e.target.value);
    textRef.current.style.height = 0;
    textRef.current.style.height = e.target.scrollHeight + 'px';

  };
  const handleScroll = (e) => {
    formattedRef.current.scrollTop = e.target.scrollTop;
  }
  const addEmoji = ({ emoji }) => {
    setMessage(message => message + emoji);
  };
  const switchKeyboard = () => {
    setEmojiActive(!emojiActive);
    if (emojiActive) {
      textRef.current.focus();
    }
  };
  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex w-full items-end px-1 py-1 pb-2 gap-1">
        <div className="w-full min-h-11 max-h-36 h-full rounded-[1.5rem] border  items-end flex bg-secondary relative overflow-hidden border-borderColor">
          <Button className="min-h-11 min-w-11" onClick={switchKeyboard}>{emojiActive ? <FaKeyboard /> : <MdOutlineEmojiEmotions />}</Button>
          <textarea placeholder="Ketik pesan" className="bg-transparent outline-none focus:outline-none py-2.5 w-full max-w-full h-full overflow-y-auto pr-2 max-h-full resize-none z-20 text-transparent caret-tealGreen-dark " rows={1} onFocus={() => setEmojiActive(false)} ref={textRef} onInput={handleChange} onScroll={handleScroll} value={message}></textarea>
          <p className="outline-none focus:outline-none max-w-[calc(100%-2.75rem)] py-2.5 z-10 w-full h-full overflow-y-auto left-11 max-h-full resize-none absolute pr-2 text-wrap backgroundspace-pre-wrap break-words border-box" ref={formattedRef} dangerouslySetInnerHTML={{ __html: formatTextPreview(message).replace(/\n/g, '<br/>') }}></p>
        </div>
        <Button className="text-background bg-lightGreen h-11 p-0 min-w-11 "><IoSend /></Button>
      </div>
      <EmojiPicker onEmojiClick={addEmoji} height={360} width="100%" className="" lazyLoadEmojis={true} open={emojiActive} emojiStyle="google" autoFocusSearch={false} />
    </div>
  );
}