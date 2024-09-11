import Contact from "../Contact";

export default function GroupPage() {
  const data = [
    {
      id: 1,
      name: "Kelas 12 DKV 1",
      status: "John: Apacoba",
    },
    {
      id: 2,
      name: "Bahasa Inggris 12 DKV 1",
      status: "Jane, John, Asep"
    },
    {
      id: 3,
      name: "Agama 12 DKV 1",
      status: "Jane: Apacoba",
    },
    {
      id: 4,
      name: "Bahasa Indonesia 12 DKV 1",
      status: "Jane, John, Asep"
    },
    {
      id: 5,
      name: "Matematika 12 DKV 1",
      status: "Jane: Apacoba",
    },
    {
      id: 6,
      name: "Seni Budaya 12 DKV 1",
      status: "Jane, John, Asep"
    }
  ]
  return (
    <>
      {data.map((item, key) => (
        <Contact key={key} id={item.id} name={item.name} status={item.status} online={false} time="" />
      ))}
    </>
  )
}