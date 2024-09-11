import './App.css'
import { Route, Routes } from 'react-router-dom'
import DefaultLayout from './layouts/default'
import HomeChatPage from './pages/home'
import ChatPage from './pages/chat'
import InfoLayout from './layouts/info'

function App() {
  return (
    <Routes>
      <Route path='/' element={<DefaultLayout />}>
        <Route index element={<HomeChatPage />} />
        <Route path='/msg/:id' element={<ChatPage />} />
        <Route path='/msg/:id/info' element={<InfoLayout />} />
        <Route path='*' element={<HomeChatPage />} />
      </Route>
    </Routes>
  )
}

export default App
