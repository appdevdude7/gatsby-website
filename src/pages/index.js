import React from "react"
import { Link } from "gatsby"
import baseball from "../images/baseball-bags.jpg" // Tell Webpack this JS file uses this image

import Layout from "../components/layout"
/* import Image from "../components/image" */
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>This is a Gatsby Project</h1>
    <p>Let's play with it</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      {/* <Image /> */}
      <img src={baseball} alt="Logo" />
    </div>
    <Link to="/page-2/">Go to page 2 </Link>
    <Link to="/about/"> Go to About</Link>
  </Layout>
)

export default IndexPage
