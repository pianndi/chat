import { Button } from "@nextui-org/react";
import { useNavigate, useParams } from "react-router-dom";
import Profile from "./Profile";
import { isDragActive } from "framer-motion";
import { useEffect, useState } from "react";

export default function Contact({
  id,
  name,
  status,
  online,
  time
}) {
  const { id: chatId } = useParams();
  const navigate = useNavigate();
  const [isDetail, setIsDetail] = useState(chatId === id);

  const handleClick = () => {
    navigate(`/msg/${id}`);
  }
  return (
    <Button className={"gap-3 items-center p-3 hover:bg-borderColor focus:outline-0 data-[pressed=true]:scale-1 text-start rounded-none w-full h-max " + (isDetail && 'bg-teaGreen')} onClick={handleClick}>
      <div>
        <Profile name={name[0]} alt={name} isBordered={online} size="md" />
      </div>
      <div className="truncate w-full">
        <h1 className="font-semibold truncate">{name}</h1>
        <p className="text-disabled text-sm truncate">{status}</p>
      </div>
      <div className="flex flex-col justify-around items-end">
        <span className="text-xs">{time}</span>
        {/* <span className=" bg-green-500 w-3 h-3 rounded-full block"></span> */}
      </div>
    </Button>
  )
}