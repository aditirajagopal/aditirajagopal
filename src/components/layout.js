/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { Fragment } from "react"
import PropTypes from "prop-types"
import { Link, useStaticQuery, graphql } from "gatsby"
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import "./layout.css"
import "./app.css"
import portfoliopdf from "./Aditi_Rajagopal_Portfolio.pdf"

export const fluidImage = graphql`fragment fluidImage on File {
  childImageSharp {
    gatsbyImageData(layout: FULL_WIDTH)
  }
}
`;

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
      <nav className="db dt-l w-100 border-box pa4 ph6-l mb4 navbg"
        style={{
          padding: `3 rem`,
        }}
      >
        <a className="db dtc-l v-mid mid-gray link dim w-100 w-50-l tc tl-l mb2 mb0-l fw9 logo__cursor" href="/" title="Home">
          > $ cd /home/
        </a>
        <div className="db dtc-l v-mid w-100 w-50-l tc tr-l">
          <Link className="link dim text f6 f5-l dib mr3 mr4-l" to="/about" title="About">me</Link>
          <a className="link dim text f6 f5-l dib mr3 mr4-l" href={portfoliopdf} title="Portfolio">portfolio</a>
          <Link className="link dim text f6 f5-l dib mr3 mr4-l" to="/pto" title="Working with Aditi">working with me</Link>
          {
            <ThemeToggler> 
            {({ theme, toggleTheme }) => {
              const iconClass =
                theme === 'light' ? '🌙' : '☀️'
              return (
                <Fragment>
                  <button
                    className="${iconClass} themeButton"
                    onClick={() => {
                      const nextTheme = theme === 'light' ? 'dark' : 'light'
                      toggleTheme(nextTheme)
                    }}
                  >{iconClass}</button>
                </Fragment>
              )
            }}
            </ThemeToggler>
          }
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
