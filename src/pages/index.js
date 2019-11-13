import React from "react"
import { Link } from "gatsby"
import baseball from "../images/baseball-bags.jpg" // Tell Webpack this JS file uses this image

import Layout from "../components/layout"
/* import Image from "../components/image" */
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Lets discuss about Baseball</h1>
    <p>Let's play with it</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      {/* <Image /> */}
      <img src={baseball} alt="Logo" />
      <p>
        Baseball is a medium to express yourself as a sportsman. It is one of
        the most followed games in the United States and also has a huge
        popularity worldwide.
        <a href="https://baseballd.com">Baseball bats</a> most definitely has a
        variety of roles. Every one's dream is to become one of the finest
        hitters and have a homerun. Be it fastpitch, slowpitch or big barrel
        game, baseball bats always make a huge difference in the way you strike
        the ball. Not to undermine the technique of the player and the timings.
      </p>
    </div>
    <Link to="/page-2/">Go to page 2 </Link>
    <Link to="/about/"> Go to About</Link>
  </Layout>
)

export default IndexPage
