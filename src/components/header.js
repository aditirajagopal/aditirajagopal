import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
<nav className="db dt-l w-100 border-box pa4 ph6-l mb4 bg-near-white"
  style={{
    padding: `3 rem`,
  }}
>
  <a className="db dtc-l v-mid mid-gray link dim w-100 w-25-l tc tl-l mb2 mb0-l fw9 logo__cursor" href="/" title="Home">
    > $ cd aditirajagopal/home/
  </a>
  <div className="db dtc-l v-mid w-100 w-75-l tc tr-l">
    <a className="link dim dark-gray f6 f5-l dib mr3 mr4-l" href="#" title="Home">me</a>
    <a className="link dim dark-gray f6 f5-l dib mr3 mr4-l" href="#" title="How it Works">favorites</a>
    <a className="link dim dark-gray f6 f5-l dib mr3 mr4-l" href="#" title="Blog">blog</a>
    <a className="link dim dark-gray f6 f5-l dib mr3 mr4-l" href="#" title="Contact">contact</a>
    <a className="link dim dark-gray f6 f5-l dib" href="#" title="Button">🌙</a>
  </div>
</nav>

)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
