import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const ResumePageTemplate = ({ page, title, contentComponent, site }) => {
  const PageContent = contentComponent || Content
  const author = page.frontmatter.author;
  const nameTokens = author.split(" ");
  return (
    <div className="container">
      <Helmet titleTemplate="%s | Resume">
        <title>{`${title}`}</title>
        <meta
          name="description"
          content={`${page.frontmatter.description}`}
        />
        <meta
          name="author"
          content={`${author}`}
        />
        <meta
          property="og:description"
          content={`${page.frontmatter.description}`}
        />
        <meta
          property="og:image"
          content={`${site.siteMetadata.siteUrl}${page.frontmatter.image.childImageSharp.fluid.src}`}
        />
        <meta property="og:type" content="profile" />
        <meta property="og:first_name" content={`${nameTokens[0]}`} />
        <meta property="og:last_name" content={`${nameTokens[1]}`} />
        <meta property="og:title" content={`${title}`} />
        <meta property="og:url" content={`${site.siteMetadata.siteUrl}${page.fields.slug}`} />
        <link rel="canonical" href={`${site.siteMetadata.siteUrl}${page.fields.slug}`} />
      </Helmet>
      <div className="columns">
        <div className="column is-10 is-offset-1">
          <div className="section">
            <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
              {title}
            </h2>
            <PageContent className="content" content={page.html} />
          </div>
        </div>
      </div>
    </div>
  )
}

ResumePageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  page: PropTypes.object,
  contentComponent: PropTypes.func,
  site: PropTypes.object,
}

const ResumePage = ({ data }) => {
  const { markdownRemark: post, site } = data
  console.log(post)
  return (
    <Layout>
      <ResumePageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        page={post}
        site={site}
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
