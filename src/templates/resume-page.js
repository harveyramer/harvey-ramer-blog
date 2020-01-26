import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import Img from 'gatsby-image'

export const ResumePageTemplate = ({ helmet, page, title, image, contentComponent }) => {
  const PageContent = contentComponent || Content;
  return (
    <div>
      {helmet || ''}
      <section className="section section--gradient">
        <div className="container columns">
          <div className="column is-1">

            <Img
              fluid={image.childImageSharp.resize}
              alt="Harvey Ramer, software engineer"
              className="customImg"
              style={
                {
                  width: "100%",
                  height: "auto",
                  borderRadius: "50%",
                  maxWidth: "260px",
                  margin: "0 auto",
                }
              }
              imgStyle={{
              }}
              placeholderStyle={{ "backgroundColor": "black" }}
            />
          </div>
          <div className="column is-10">
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
        image={post.frontmatter.image}
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
            resize(width: 300, height: 300, cropFocus: ENTROPY){
              src
              width
              height
              aspectRatio
            }
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
