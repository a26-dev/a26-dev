import { FunctionComponent } from 'react'

const Breadcrumb: FunctionComponent = (props) => {
  return (
    <div className="section pt-4 pb-0" {...props}>
      <nav className="breadcrumb has-arrow-separator">
        <ul className="container">
          <li>
            <a className="has-text-grey">Home</a>
          </li>
          <li className="is-active">
            <a>About</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Breadcrumb
