import { Outlet } from 'react-router-dom';
export default function Layout() {
  return (
    <>
      <Header />
      <div>
        <Outlet />
      </div>
      <Footer/>
    </>
  )
}