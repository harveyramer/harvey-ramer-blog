import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/keyboard.jpg')`,
            backgroundPosition: `bottom center`,
            backgroundAttachment: `fixed`,
            backgroundSize: `cover`,
          }}
        >
          <h1
            className="has-text-weight-bold is-size-1"
            style={{
              boxShadow: '0.5rem 0 0 rgb(0, 159, 254), -0.5rem 0 0 rgb(0, 159, 254)',
              backgroundColor: 'rgb(0, 159, 254)',
              color: 'white',
              padding: '1rem',
            }}
          >
            Latest Articles
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
