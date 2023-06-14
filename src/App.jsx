import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"
import { Tweets } from "./components/Tweets"

import '../src/styles/global.scss'

export function App() {
  return (
    <>
    <Header/>
    <Sidebar/>
    <Tweets/>
    </>
  )
}


