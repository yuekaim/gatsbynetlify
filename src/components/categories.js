import * as React from "react"
import { StaticQuery, graphql } from "gatsby"

import Category from "../components/category"

const ListCategories = (props) => {
    
    const projects = props.data.allMarkdownRemark.edges

    return (
        <div id="categories">
            {projects.map(
                (project) => {
                    <Category category={project.frontmatter.tags} />
                }
            )}
        </div>
    )
}

export default function Categories() {
    return(
        <StaticQuery
            query={graphql`
                query categoriesQuery {
                    allMarkdownRemark {
                        edges {
                          node {
                            frontmatter {
                              tags
                            }
                          }
                        }
                    }
                }
            `}
        render={(data) => <ListCategories data={data}/>}
        />
    );
}