import * as React from "react"
import { graphql } from "gatsby"

import Seo from "../components/seo"

const BlogIndex = ({data}) => {
  const projects = data.allMarkdownRemark.nodes;
  
  return(
    <ul>
      {projects.map((project) => {
        const title = project.frontmatter.title
        return (
          <li>
            {title}
          </li>
        )
      })}
    </ul>
  )
}

export default BlogIndex

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="All posts" />

export const pageQuery = graphql`
  query MyQuery {
    allMarkdownRemark {
      nodes {
        frontmatter {
          title
        }
      }
    }
  }
`
