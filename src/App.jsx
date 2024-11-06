import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import ChatLists from "./Pages/ChatLists"
import WhatsAppChat from "./Pages/WhatsAppChat"
import Profile from "./Pages/Profile";

function App() {
  let router = createBrowserRouter(createRoutesFromElements(
    <>
      <Route path="/" element={<ChatLists />} />
      <Route path="/profile" element={<WhatsAppChat />} />
      <Route path="/contact" element={<Profile />} />
    </>
  ))

  return (
    <>
      <RouterProvider router={router} ></RouterProvider>
    </>
  )
}

export default App
