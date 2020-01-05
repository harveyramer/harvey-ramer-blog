import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import { kebabCase } from 'lodash'
import Content, { HTMLContent } from '../components/Content'

class LatestPost extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    const PostContent = HTMLContent || Content
    console.log(posts)
    return (
      <div>
        {posts &&
          posts.map(({ node: post }) => (
            <div key={post.id}>
              <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
                {post.frontmatter.title}
              </h1>
              <p>{post.frontmatter.description}</p>
              <PostContent content={post.html} />
            </div>
          ))
        }
      </div>
    )
  }
}


LatestPost.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query LatestPostQuery {
        allMarkdownRemark(
          limit: 1
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              html
              id
              fields {
                slug
              }
              frontmatter {
                title
                description
                templateKey
                tags
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 120, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data) => <LatestPost data={data} />}
  />
)
