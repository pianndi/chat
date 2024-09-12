import { IoIosChatboxes } from "react-icons/io";
import ItemComponent from "../Item";
import { BsKey } from "react-icons/bs";
import { IoChatboxEllipsesOutline, IoCloudyNightOutline } from "react-icons/io5";
import { MdFullscreen } from "react-icons/md";
import { IoSchool } from "react-icons/io5";
import { TbLogout2 } from "react-icons/tb";
import { PiGlobe } from "react-icons/pi";
import Profile from "../Profile";
import { ThemeContext } from '../../contexts/ThemeContext'
import { useContext, useEffect, useState } from 'react'
export default function SettingPage() {
  const { theme, handleTheme, getThemeConfig } = useContext(ThemeContext)
  const [_, alias] = getThemeConfig()
  const [themeAlias, setThemeAlias] = useState(alias)
  useEffect(() => {
    const [_, alias] = getThemeConfig()
    setThemeAlias(alias)
  }, [theme])
  return (
    <>
      <ItemComponent title="John Doe" className="text-xl border-b border-borderColor" subtitle="https://pianndi.github.io" icon={<Profile className="min-w-16 min-h-16" />} />
      <ItemComponent title="Pesan" subtitle="Riwayat Pesan" icon={<IoChatboxEllipsesOutline />}  />
      <ItemComponent title="Tema" subtitle={themeAlias} icon={<IoCloudyNightOutline />} onClick={() => handleTheme(theme == "light" ? "dark" : "light")} />
      <ItemComponent title="Tampilan Penuh" subtitle="Masuk tampilan layar penuh" icon={<MdFullscreen className="text-2xl" />} />
      <ItemComponent title="Sandi" subtitle="Ubah kata sandi" icon={<BsKey />} />
      <ItemComponent title="Keluar" subtitle="Keluarkan akun saya" icon={<TbLogout2 />} />
      <p className="px-6 pt-3 text-sm font-semibold text-disabled">Lainnya dari SMK Negeri 1 Demak</p>
      <ItemComponent title="Buka Elektronik Kurikulum" icon={<IoSchool />} onClick={() => window.location.href = "/"} />
      <ItemComponent title="Buka Official Website" icon={<PiGlobe />} onClick={() => window.location.href = "https://smkn1-demak.sch.id/"} />
      <p className="px-6 py-3  text-sm font-semibold text-disabled">Dibuat dengan setulus hati oleh <a href="https://instagram.com/pianndi" className="underline">@Pianndi</a></p>
    </>

  )
}