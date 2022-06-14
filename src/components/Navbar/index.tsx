import { FunctionComponent, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Navbar: FunctionComponent = (props) => {
  const [isBurgerActive, setIsBurgerActive] = useState(false)

  return (
    <nav className="navbar is-black has-shadow" {...props}>
      <div className="container">
        <div className="navbar-brand">
          <Link href="/">
            <div
              className="navbar-item pt-0 pb-0"
              style={{ gap: 16, cursor: 'pointer' }}
            >
              <Image
                src="/assets/logo.png"
                alt="Site logo"
                width={52}
                height={52}
                layout="fixed"
              />
              <span className="has-text-weight-semibold">a26.dev</span>
            </div>
          </Link>
          <a
            className={`navbar-burger ${isBurgerActive ? 'is-active' : ''}`}
            onClick={() => setIsBurgerActive(!isBurgerActive)}
          >
            <span></span>
            <span></span>
            <span></span>
          </a>
        </div>
        <div className={`navbar-menu ${isBurgerActive ? 'is-active' : ''}`}>
          <div className="navbar-end">
            <a href="" className="navbar-item">
              Home
            </a>
            {/* <a href="" className="navbar-item">
              About
            </a>
            <a href="" className="navbar-item">
              Apps
            </a> */}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
