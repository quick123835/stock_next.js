import Navbar1 from '../Nav'

export default function Layout ({ children }) {
  return (
    <div>
      <Navbar1 />

      <main>{children}</main>
    </div>
  )
}
