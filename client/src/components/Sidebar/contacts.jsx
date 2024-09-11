import Contact from "../Contact";

export default function ContactPage() {
  const data = [
    {
      id: 1,
      nama: "John Doe",
      kelas: "12 DKV 1",
    },
    {
      id: 2,
      nama: "Jane Doe",
      kelas: "12 DKV 2",
    },
    {
      id: 3,
      nama: "John Smith",
      kelas: "12 DKV 3",

    },
    {
      id: 4,
      nama: "Jane Smith",
      kelas: "12 DKV 1",
    },
    {
      id: 5,
      nama: "John Doe",
      kelas: "12 DKV 2",

    },
    {
      id: 6,
      nama: "Jane Doe",
      kelas: "12 DKV 3",
    },
    {
      id: 7,
      nama: "John Smith",
      kelas: "12 DKV 1",
    },
    {
      id: 8,
      nama: "Jane Smith",
      kelas: "12 DKV 2",
    },
    {
      id: 9,
      nama: "John Doe",
      kelas: "12 DKV 3",
    },
    {
      id: 10,
      nama: "Jane Doe",
      kelas: "12 DKV 1",
    },
    {
      id: 11,
      nama: "John Smith",
      kelas: "12 DKV 2",
    },
    {
      id: 12,
      nama: "Jane Smith",
      kelas: "12 DKV 3",
    },
  ]
  return (
    <>
      {data.map((item, key) => (
        <Contact key={key} id={item.id} name={item.nama} status={item.kelas} online={false} time="" />
      ))}
    </>)

}