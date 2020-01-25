import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const ResumePageTemplate = ({ helmet, page, title, contentComponent }) => {
  const PageContent = contentComponent || Content
  return (
    <div>
      {helmet || ''}
      <section className="section section--gradient">
        <div className="container">
          <div className="column is-10 is-offset-1">
            <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
              {title}
            </h2>
            <PageContent className="content" content={page.html} />
          </div>
        </div>
      </section>
    </div>
  )
}

ResumePageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  page: PropTypes.object,
  contentComponent: PropTypes.func,
  helmet: PropTypes.object,
}

const ResumePage = ({ data }) => {
  const { markdownRemark: post, site } = data
  const author = post.frontmatter.author;
  const nameTokens = author.split(" ");

  return (
    <Layout>
      <ResumePageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        page={post}
        helmet={<Helmet titleTemplate="%s | Resume">
          <title>{`${post.frontmatter.title}`}</title>
          <meta
            name="description"
            content={`${post.frontmatter.description}`}
          />
          <meta
            name="author"
            content={`${author}`}
          />
          <meta
            property="og:description"
            content={`${post.frontmatter.description}`}
          />
          <meta
            property="og:image"
            content={`${site.siteMetadata.siteUrl}${post.frontmatter.image.childImageSharp.fluid.src}`}
          />
          <meta property="og:type" content="profile" />
          <meta property="og:first_name" content={`${nameTokens[0]}`} />
          <meta property="og:last_name" content={`${nameTokens[1]}`} />
          <meta property="og:title" content={`${post.frontmatter.title}`} />
          <meta property="og:url" content={`${site.siteMetadata.siteUrl}${post.fields.slug}`} />
          <link rel="canonical" href={`${site.siteMetadata.siteUrl}${post.fields.slug}`} />
        </Helmet>}
      />
    </Layout>
  )
}

ResumePage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default ResumePage

export const resumePageQuery = graphql`
  query ResumePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      fields{ slug }
      html
      frontmatter {
        title
        author
        description
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    site(siteMetadata: {siteUrl: {}}) {
      siteMetadata{
        siteUrl
      }
    }
  }
`
