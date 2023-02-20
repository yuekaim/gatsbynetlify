import * as React from "react"

import Seo from "../components/seo"
import Categories from "../components/categories"
import Projects from "../components/projects"


const IndexPage = () => {
  return (
    <main>
      <Categories />
      <Projects />
    </main>
  )
}

export default IndexPage
export const Head = () => <Seo title="Rundong" />

