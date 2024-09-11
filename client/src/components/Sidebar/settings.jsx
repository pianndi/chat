import { IoIosChatboxes } from "react-icons/io";
import ItemComponent from "../Item";
import { BsKey } from "react-icons/bs";
import { IoChatboxEllipsesOutline, IoCloudyNightOutline } from "react-icons/io5";

export default function SettingPage() {
  return (
    <div className="flex flex-col h-full w-full">
      <ItemComponent title="Akun" subtitle="Logout, kata Sandi" icon={<BsKey />} />
      <ItemComponent title="Pesan" subtitle="Ukuran Font, riwayat chat" icon={<IoChatboxEllipsesOutline />} />
      <ItemComponent title="Tema" subtitle="Default Sistem" icon={<IoCloudyNightOutline />} />
    </div>

  )
}