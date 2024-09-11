import Contact from "../Contact"

export default function HomePage({ setActive }) {
  const data = [
    {
      id: 1,
      name: "John Doe",
      status: "Hey there! I'm using EkurChat",
      online: true,
      time: "Kemarin"
    },
    {
      id: 2,
      name: "Jane Doe",
      status: "Hey there! I'm using EkurChat",
      online: false,
      time: "Kemarin"
    },
    {
      id: 3,
      name: "John Doe",
      status: "Hey there! I'm using EkurChat",
      online: true,
      time: "12:00"
    },
    {
      id: 4,
      name: "Jane Doe",
      status: "Hey there! I'm using EkurChat",
      online: false,
      time: "12:00"
    },
    {
      id: 5,
      name: "John Doe",
      status: "Hey there! I'm using EkurChat",
      online: true,
      time: "12:00"
    },
    {
      id: 6,
      name: "Jane Doe",
      status: "Hey there! I'm using EkurChat",
      online: false,
      time: "Kemarin"
    },
    {
      id: 7,
      name: "John Doe",
      status: "Hey there! I'm using EkurChat",
      online: true,
      time: "Kemarin"
    },
    {
      id: 8,
      name: "Jane Doe",
      status: "Hey there! I'm using EkurChat",
      online: false,
      time: "Kemarin"
    },
    {
      id: 9,
      name: "John Doe",
      status: "Hey there! I'm using EkurChat",
      online: true,
      time: "Kemarin"
    },
    {
      id: 10,
      name: "Jane Doe",
      status: "Hey there! I'm using EkurChat",
      online: false,
      time: "Kemarin"
    },
    {
      id: 11,
      name: "John Doe",
      status: "Hey there! I'm using EkurChat",
      online: true,
      time: "Kemarin"
    },
    {
      id: 12,
      name: "Jane Doe",
      status: "Hey there! I'm using EkurChat",
      online: false,
      time: "Kemarin"
    },
    {
      id: 13,
      name: "John Doe",
      status: "Hey there! I'm using EkurChat",
      online: true,
      time: "Kemarin"
    },
    {
      id: 14,
      name: "Jane Doe",
      status: "Hey there! I'm using EkurChat",
      online: false,
      time: "Kemarin"
    },
  ]
  return (
    <>
      {data.map((contact, index) => <Contact key={index} setActive={setActive}  {...contact} />)}
    </>
  )
}