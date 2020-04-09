import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import EmailSignup from '../components/EmailSignup'
import './all.sass'
import useSiteMetadata from './SiteMetadata'
import { withPrefix } from 'gatsby'

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata()
  return (
    <div className="site">
      <div className="site__content">
        <Helmet>
          <html lang="en" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="google-site-verification" content="WfXmKXeyLM09X3hfug4Apob41VO_8q1AqYcgnulwNWI" />
          <title>{title}</title>
          <meta name="description" content={description} />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href={`${withPrefix('/')}img/apple-icon180x180.png`}
          />
          <link
            rel="icon"
            type="image/png"
            href={`${withPrefix('/')}img/favicon-32x32.png`}
            sizes="32x32"
          />
          <link
            rel="icon"
            type="image/png"
            href={`${withPrefix('/')}img/favicon-16x16.png`}
            sizes="16x16"
          />
          <meta name="theme-color" content="#fff" />
          <link rel="canonical" href="https://www.harveyramer.com/" />
          <meta property="og:type" content="blog" />
          <meta property="og:title" content={title} />
          <meta property="og:url" content="/" />
          <meta
            property="og:image"
            content={`${withPrefix('/')}img/og-image.png`}
          />
          <meta property="fb:app_id" content="526426944640037" />
        </Helmet>
        <Navbar />
        <div>{children}</div>
      </div>
      <EmailSignup />
      <Footer />
    </div>
  )
}

export default TemplateWrapper
