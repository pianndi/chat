import { Button } from "@nextui-org/react";


export default function ItemComponent({ title, subtitle, icon, className,onClick }) {
  return (
    <Button className={"flex items-center p-3 hover:bg-borderColor focus:outline-0 data-[pressed=true]:scale-1 text-start rounded-none w-full h-max " + className} onClick={onClick}>
      <div className="flex items-center py-1 justify-center rounded-lg min-w-12 w-max px-3 text-2xl text-disabled">
        {icon}
      </div>
      <div className="truncate w-full">
        <h1 className="truncate">{title}</h1>
        <p className="text-disabled text-sm truncate">{subtitle}</p>
      </div>
    </Button>
  )
}