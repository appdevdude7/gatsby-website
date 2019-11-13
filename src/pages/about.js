import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>About this Project</h1>
    <p>
      This is a website based on Gatsby to try different options using the
      framework. On going experiments here, not completed project.
    </p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default About
