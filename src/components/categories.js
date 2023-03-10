import * as React from "react"
import { StaticQuery, graphql } from "gatsby"

import Category from "../components/category"

const ListCategories = (props) => {
    let tagsList = []
    const projects = props.data.allMarkdownRemark.edges
    // get rid of duplicates
    projects.forEach((project) => {
        let tags = project.node.frontmatter.tags
        tagsList.forEach((tag) => {
            if (!tagsList.includes(tag)) {
                tagsList.push(tag);
            }
        })
    });

    return (
        <div id="categories">
            {tagsList.map(
                (tag) => 
                    <Category category={tag} />
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