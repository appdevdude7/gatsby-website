import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the About page</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default About