import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'

import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const BlogPostTemplate = ({
  featuredimage,
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content

  return (
    <div>
      {helmet || ''}
      <div
        className="full-width-image margin-top-0"
        style={{
          backgroundImage: `url(${!!featuredimage.childImageSharp ? featuredimage.childImageSharp.fluid.src : featuredimage
            })`,
          backgroundPosition: `bottom center`,
          backgroundSize: `cover`,
          height: 'calc(100vh - 52px)',
        }}
      >
        <div
          style={{
            display: 'flex',
            height: '150px',
            lineHeight: '1',
            justifyContent: 'space-around',
            alignItems: 'left',
            flexDirection: 'column',
          }}
        >
          <h1
            className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
            style={{
              backgroundColor: 'rgb(0, 159, 254)',
              color: 'white',
              lineHeight: '1.3',
              padding: '.75em 1.25em',
            }}
          >
            {title}
          </h1>
        </div>
      </div>
      <section className="section">
        <div className="container">
          <div className="column is-10 is-offset-1">
            <p className="is-size-4 post-summary">{description}</p>
            <div className="content">
              <PostContent content={content} />
              {tags && tags.length ? (
                <div style={{ marginTop: `4rem` }}>
                  <h4>Tags</h4>
                  <ul className="taglist">
                    {tags.map(tag => (
                      <li key={tag + `tag`}>
                        <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </section>
      <section className="section" style={{ backgroundColor: "rgb(0, 159, 254)", color: "white", lineHeight: 1.3, padding: "0.75em 1.25em" }}>
        <div className="container">
          <div className="column is-10 is-offset-1">
            <p>I wrote this article to help you succeed. Was the article useful, or did errors or omissions frustrate you? Do you have suggestions for further articles? Talk to me. <a href="https://www.harveyramer.com/contact" style={{ textDecoration: "underline", color: "white" }}>I want to hear from you.</a></p>
          </div>
        </div>
      </section>
    </div>
  )
}

BlogPostTemplate.propTypes = {
  featuredimage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const BlogPost = ({ data }) => {
  const { markdownRemark: post, site } = data
  return (
    <Layout>
      <BlogPostTemplate
        featuredimage={post.frontmatter.featuredimage}
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | On Software">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
            <meta
              name="author"
              content={`${post.frontmatter.author}`}
            />
            <meta
              property="og:description"
              content={`${post.frontmatter.description}`}
            />
            <meta
              property="og:image"
              content={`${site.siteMetadata.siteUrl}${post.frontmatter.featuredimage.childImageSharp.fixed.src}`}
            />
            <meta property="og:type" content="article" />
            <meta property="article:author" content={`${post.frontmatter.author}`} />
            <meta property="article:published_time" content={`${post.frontmatter.date}`} />
            <meta property="og:title" content={`${post.frontmatter.title}`} />
            <meta property="og:url" content={`${site.siteMetadata.siteUrl}${post.fields.slug}`} />
            <link rel="canonical" href={`${site.siteMetadata.siteUrl}${post.fields.slug}`} />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
    site: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      fields {
        slug
      } 
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        author
        tags
        featuredimage {
          childImageSharp {
            fixed(width:1200){
              src
            }
            fluid(maxWidth: 2048, quality: 80) {
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
