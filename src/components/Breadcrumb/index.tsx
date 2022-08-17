import type { FunctionComponent } from 'react'
import Link from 'next/link'
import useTranslation from '../../locales'

const Breadcrumb: FunctionComponent = (props) => {
  const t = useTranslation()
  return (
    <div className="section pt-4 pb-0" {...props}>
      <nav className="breadcrumb has-arrow-separator">
        <ul className="container">
          <li>
            <Link href="/">
              <a className="has-text-grey">{t('common:home')}</a>
            </Link>
          </li>
          <li className="is-active">
            <a>{t('common:about')}</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Breadcrumb
