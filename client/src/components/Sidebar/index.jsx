import { BsThreeDotsVertical } from "react-icons/bs";
import Navigation from "../Navigation";
import SwipeableViews from "react-swipeable-views/src";
import HomePage from "./chats";
import GroupPage from "./groups";
import ContactPage from "./contacts";
import { useRef, useState } from "react";
import Button from "../Button";
import { IoSearchOutline } from "react-icons/io5";
import SettingPage from "./settings";

export default function Sidebar() {
  const defaultIndex = 0
  const [index, setIndex] = useState(defaultIndex)
  const [title, setTitle] = useState('EkurChat')
  const pages = [
    { title: 'EkurChat', element: <HomePage />, ref: useRef() },
    { title: 'Grup', element: <GroupPage />, ref: useRef() },
    { title: 'Kontak', element: <ContactPage />, ref: useRef() },
    { title: 'Setelan', element: <SettingPage />, ref: useRef() },
  ]
  const handleChangeIndex = index => {
    setIndex(index)
    setTitle(pages[index].title)
    pages[index].ref.current.scrollTop = 0
  }

  return (
    <div className="sidebar h-full bg-background md:w-96 md:border-r border-borderColor">
      <div className="px-3 flex w-full h-full items-center justify-between border-b border-borderColor truncate lg:col-span-2">
        <h1 className={"text-2xl truncate " + (index == defaultIndex && 'text-lightGreen font-semibold')}>{title}</h1>
        <span className="flex gap-2 text-xl">
          <Button>
            <IoSearchOutline />
          </Button>
          {/* <Button>
            <BsThreeDotsVertical />
          </Button> */}

        </span>
      </div>
      <SwipeableViews index={index} onChangeIndex={handleChangeIndex} containerStyle={{ height: '100%', maxHeight: '100%' }} >
        {pages.map(({ element, ref }, i) =>
          (<div key={i} className="h-full overflow-y-auto" ref={ref}>{element}</div>)
        )}
      </SwipeableViews>
      <div className="lg:row-start-2 lg:row-end-2 w-full h-full">
        <Navigation handleIndex={handleChangeIndex} index={index}></Navigation>
      </div>
    </div >
  )
}