import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import ChatLists from "./Pages/ChatLists"
import WhatsAppChat from "./Pages/WhatsAppChat"

function App() {
  let router = createBrowserRouter(createRoutesFromElements(
    <>
      <Route path="/" element={<ChatLists />} />
      <Route path="/profile" element={<WhatsAppChat />} />
    </>
  ))

  return (
    <>
      <RouterProvider router={router} ></RouterProvider>
    </>
  )
}

export default App
