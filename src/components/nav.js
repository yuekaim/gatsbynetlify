import * as React from "react"
import { StaticQuery, graphql } from "gatsby"

const Nav = ({data}) => {
    return (
        <StaticQuery
        query={graphql`
            query MyQuery {
                allMarkdownRemark {
                nodes {
                    frontmatter {
                    tags
                    title
                    new
                    description
                    }
                }
                }
            }
        `}
        render={data => (
            <div>
                {data.allMarkdownRemark.nodes.map((project) => {
                const tags = project.frontmatter.tags
                return (
                    <div key={tags} >
                        {tags}
                    </div>
                )
                })
                }
            </div>
        )}
        />
    )
  }
  


export default {Nav};
  
