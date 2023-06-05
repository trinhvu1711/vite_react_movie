import { Outlet } from 'react-router-dom'
import Header from './header'

const Main = () => {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
    </>
  )
}

export default Main