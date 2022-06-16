import type { FunctionComponent } from 'react'
import Image from 'next/image'

const Footer: FunctionComponent = (props) => {
  return (
    <footer
      className="section"
      style={{ backgroundColor: '#f2f2f2', flexGrow: 1 }}
      {...props}
    >
      <div className="container">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span>
            <Image
              src="/assets/vercel.svg"
              alt="Vercel Logo"
              width={72}
              height={16}
            />
          </span>
        </a>
        <p>Bulma.io unDraw.co</p>
      </div>
    </footer>
  )
}

export default Footer
