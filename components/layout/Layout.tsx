import Cards from "../cards/Cards"
import Nav from "./nav/Nav"
import Whatsapp from "./whatsapp/Whatsapp"


export const Layout = ( {children} )=>{
  return (
    <>
      <Whatsapp/>
      <Nav />
      {children}
      <Cards />
    </>
  )
}