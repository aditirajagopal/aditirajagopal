/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Link, useStaticQuery, graphql } from "gatsby"
import "./layout.css"
import "./app.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <nav className="db dt-l w-100 border-box pa4 ph6-l mb4 bg-near-white"
        style={{
          padding: `3 rem`,
        }}
      >
        <a className="db dtc-l v-mid mid-gray link dim w-100 w-25-l tc tl-l mb2 mb0-l fw9 logo__cursor" href="/" title="Home">
          > $ cd /home/
        </a>
        <div className="db dtc-l v-mid w-100 w-75-l tc tr-l">
          <Link className="link dim dark-gray f6 f5-l dib mr3 mr4-l" to="/about" title="About">me</Link>
        </div>
      </nav>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 1024,
          padding: `0px 1.0875rem 0rem`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
