import { Button } from "@nextui-org/react";


export default function ItemComponent({ title, subtitle, icon }) {
  return (
    <Button className="gap-3 flex items-center p-3 hover:bg-borderColor focus:outline-0 data-[pressed=true]:scale-1 text-start rounded-none w-full h-max ">
      <div className="flex items-center justify-center rounded-lg w-12 h-12 text-2xl text-disabled">
        {icon}
      </div>
      <div className="truncate w-full">
        <h1 className="font-semibold truncate">{title}</h1>
        <p className="text-disabled text-sm truncate">{subtitle}</p>
      </div>
    </Button>
  )
}