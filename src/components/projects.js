import * as React from "react"
import { StaticQuery, graphql } from "gatsby"

const ListProjects = (props) => {
    let titles = []
    const projects = props.data.allMarkdownRemark.edges
    // get rid of duplicates
    projects.forEach((project) => {
        let title = project.node.frontmatter.title
        titles.push(title)
    });

    return (
        <div id="categories">
            {titles.map(
                (title) => 
                    <div>{title}</div>
            )}
        </div>
    )
}


export default function Projects() {
    return(
        <StaticQuery
            query={graphql`
                query categoriesQuery {
                    allMarkdownRemark {
                        edges {
                          node {
                            frontmatter {
                                tags
                                title
                                new
                            }
                          }
                        }
                    }
                }
            `}
        render={(data) => <ListProjects data={data}/>}
        />
    );
}