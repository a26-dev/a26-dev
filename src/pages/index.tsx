import type { NextPage } from 'next'
import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
// import Breadcrumb from '../components/Breadcrumb'

const Home: NextPage = () => {
  const [isBurgerActive, setIsBurgerActive] = useState(false)

  return (
    <>
      <Head>
        <title>a26.dev</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/assets/favicon.ico" />
      </Head>

      <Navbar />

      {/* <Breadcrumb /> */}

      <section className="section">
        <div className="container">
          <div className="columns is-vcentered is-multiline">
            <div className="column is-6-tablet is-3-desktop has-text-right-desktop">
              <h1 className="is-size-1 title">a26.dev</h1>
              <h2 className="is-size-2 subtitle">Free tools for ever</h2>
              <p>We develop digital tools to help with daily tasks</p>
            </div>
            <div className="column is-6-tablet is-5-desktop has-text-centered">
              <Image
                src="/assets/undraw_home_screen_re_640d.svg"
                width={466}
                height={466}
              />
            </div>
            <div className="column is-12-tablet is-4-desktop">
              <div className="columns is-multiline">
                <div className="column is-6-tablet is-12-desktop">
                  <div className="is-size-4 mb-4">Check out the app list</div>
                  <p>
                    All the apps are available at{' '}
                    <span className="has-text-weight-semibold">a26.app</span>{' '}
                    site for easy and customizable access
                  </p>
                </div>
                <div className="column is-6-tablet is-12-desktop">
                  <a className="button is-primary is-fullwidth is-size-3 has-text-weight-semibold">
                    Go to a26.app
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="columns is-8 is-variable">
            <div className="column is-7-tablet">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                facere ab qui aspernatur. Cumque placeat architecto officia
                impedit voluptatum. Odit doloremque voluptatibus possimus ullam
                reprehenderit dolore facere, quasi nulla quia!
              </p>
            </div>
            <div className="column  is-5-tablet">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, ex.
              Quo error modi in cum excepturi consectetur rem? Molestiae quis
              error est? Recusandae nam id deserunt suscipit, labore quis
              expedita?
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default Home
