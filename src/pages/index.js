import * as React from "react"

import Seo from "../components/seo"
import Categories from "../components/categories"


const IndexPage = () => {
  return (
    <main>
      <Categories />
      <h1>Welcome to my Gatsby site!</h1>
      <p>I'm making this by following the Gatsby Tutorial.</p>
    </main>
  )
}

export default IndexPage
export const Head = () => <Seo title="Rundong" />

