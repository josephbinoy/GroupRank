import { createRoot } from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import Groups from './pages/Groups.jsx'
import Group from './pages/Group.jsx'
import NewList from './pages/NewList.jsx';

createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Groups />} />
        <Route path="groups" element={<Groups />} />
        <Route path="groups/:id" element={<Group />} />
        <Route path="newlist" element={<NewList />} />
      </Routes>
    </BrowserRouter>
  </ChakraProvider>
)
