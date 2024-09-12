import './App.css'
import { Route, Routes } from 'react-router-dom'
import { useContext } from 'react'
import DefaultLayout from './layouts/default'
import HomeChatPage from './pages/home'
import ChatPage from './pages/chat'
import InfoLayout from './layouts/info'
import { ThemeContext } from './contexts/ThemeContext'

function App() {
  const { theme } = useContext(ThemeContext)
  return (
    <main className={"text-dark " + theme}>
      <Routes>
        <Route path='/' element={<DefaultLayout />}>
          <Route index element={<HomeChatPage />} />
          <Route path='/msg/:id' element={<ChatPage />} />
          <Route path='/msg/:id/info' element={<InfoLayout />} />
          <Route path='*' element={<HomeChatPage />} />
        </Route>
      </Routes>
    </main>
  )
}

export default App
