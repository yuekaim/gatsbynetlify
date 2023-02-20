import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Category from "../components/category"

const Categories = () => {
    const categories = useStaticQuery(graphql`
        query MyQuery {
            allMarkdownRemark {
                nodes {
                    frontmatter {
                        tags
                    }
                }
            }
            }
    `)
    
    // const projects = categories.nodes

    return (
        <div id="categories">
            test here
            {projects.map(
                (project) => {
                    <Category category="test"/>
                }
            )}
        </div>
    )
}

export default Categories