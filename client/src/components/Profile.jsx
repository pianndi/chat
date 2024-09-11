import { Avatar } from "@nextui-org/react";

export default function Profile({ className, ...props }) {
  return (
    <Avatar className={"bg-gray-300 text-background text-xl font-bold ring-lightGreen aspect-square focus:outline-0 " + className} {...props} />
  )
}