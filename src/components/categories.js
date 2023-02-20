import * as React from "react"
import { StaticQuery, graphql } from "gatsby"

import Category from "../components/category"

const ListCategories = (props) => {
    let tagsList = []
    const projects = props.data.allMarkdownRemark.edges
    projects.forEach((project) => {
        let tags = project.node.frontmatter.tags
        tags.forEach((tag) => {
            if (!tagsList.includes(tag)) {
                tagsList.push(tag);
            }
        })
    });

    return (
        <div id="categories">
            {tagsList.map(
                (tag) => 
                    <div>
                        <Category category={tag} />
                    </div>
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