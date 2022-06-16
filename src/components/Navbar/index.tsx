import { useState } from 'react'
import type { FunctionComponent } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import useTranslation from '../../locales'

const Navbar: FunctionComponent = (props) => {
  const [isBurgerActive, setIsBurgerActive] = useState(false)
  const t = useTranslation()

  return (
    <nav className="navbar is-black has-shadow" {...props}>
      <div className="container">
        <div className="navbar-brand">
          <Link href="/">
            <a
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
            </a>
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
            <Link href="/">
              <a className="navbar-item">{t('common:home')}</a>
            </Link>
            <Link href="/about">
              <a className="navbar-item">{t('common:about')}</a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
