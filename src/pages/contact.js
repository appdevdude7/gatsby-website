import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default class Contact extends React.Component {
  state = {
    firstName: "",
    lastName: "",
  }
  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value,
    })
  }
  handleSubmit = event => {
    event.preventDefault()
    alert(`Welcome ${this.state.firstName} ${this.state.lastName}!`)
  }
  render() {
    return (
      <Layout>
        <SEO title="Contact Page" />
        <h1>Hi from the Contact page</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            First name
            <input
              type="text"
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleInputChange}
            />
          </label>
          <label>
            Last name
            <input
              type="text"
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleInputChange}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
        <Link to="/">Go back to the homepage</Link>
      </Layout>
    )
  }
}
/* const Contact = () => (
  <Layout>
    <SEO title="Contact Page" />
    <h1>Hi from the Contact page</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Contact
 */
