
import Profile from "../components/Profile";
import { IoArrowBackOutline } from "react-icons/io5";
import Button from "../components/Button";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { Avatar, Skeleton } from "@nextui-org/react";

export default function DetailChatPage() {
  const navigate = useNavigate()
  return (
    <div className="flex flex-col gap-2 ">
      <div className="border-b border-borderColor bg-background flex-col flex py-2">
        <div className="w-full flex justify-between px-2">
          <Button onClick={() => navigate(-1)}>
            <IoArrowBackOutline />
          </Button>
          <Profile className="w-full max-w-40 h-full mb-1" />
          <Button >
            <BsThreeDotsVertical />
          </Button>
        </div>
        <div className="flex flex-col text-center">
          <h1 className="text-2xl">John Doe</h1>
          <p className="text-gray-500 text-sm">12 DKV 1</p>
        </div>
      </div>
      <div className="border-borderColor border-b bg-background px-3 py-2 flex flex-col z-50" >
        <p>Media</p>

      </div>
    </div>
  )
}