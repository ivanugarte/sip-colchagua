import Footer from "./footer/Footer"
import Nav from "./nav/Nav"
import Whatsapp from "./whatsapp/Whatsapp"


export const Layout = ({children})=>{
  return (
    <>
      <Whatsapp/>
      <Nav />
      {children}
      <Footer />
    </>
  )
}