import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/layout.css"

export const fluidImage = graphql`
fragment fluidImage on File {
  childImageSharp {
    fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid
    }
  }
}
`;

export const pageQuery = graphql`
  query {
    minnesota_birch: file(relativePath: { eq: "minnesota_birch.jpg" }) {
       ...fluidImage, publicURL }
    spaceman_spiff: file(relativePath: { eq: "spaceman_spiff.jpg" }) {
      ...fluidImage, publicURL
    }
    outerspace_man: file(relativePath: { eq: "outerspace_man.jpg" }) {
      ...fluidImage, publicURL
    }
    hail_to_the_chip: file(relativePath: { eq: "hailtothechip.PNG" }) {
      ...fluidImage, publicURL
    }
    stacy_for_wbsb: file(relativePath: { eq: "stacyforWBSB.PNG" }) {
      ...fluidImage, publicURL
    }
    sgbrickman_flyer: file(relativePath: { eq: "sgbrickman_flyer.png" }) {
      ...fluidImage, publicURL
    }
    mrengineer: file(relativePath: { eq: "mrengineer.png" }) {
      ...fluidImage, publicURL
    }
    tangles: file(relativePath: { eq: "tangles.png" }) {
      ...fluidImage, publicURL
    }
    psyscream: file(relativePath: { eq: "psyscream.jpg" }) {
      ...fluidImage, publicURL
    }
    mnNice: file(relativePath: { eq: "mnNice.jpg" }) {
      ...fluidImage, publicURL
    }
    mgolights: file(relativePath: { eq: "mgolights.jpg" }) {
      ...fluidImage, publicURL
    }
    snoopy: file(relativePath: { eq: "snoopy.jpg" }) {
      ...fluidImage, publicURL
    }
    teaNcake: file(relativePath: { eq: "teaNcake.jpg" }) {
      ...fluidImage, publicURL
    }
    thewall: file(relativePath: { eq: "thewall.JPG" }) {
      ...fluidImage, publicURL
    }
    posters: file(relativePath: { eq: "posters.JPG" }) {
      ...fluidImage, publicURL
    }
    paintnight: file(relativePath: { eq: "paintnight.JPG" }) {
      ...fluidImage, publicURL
    }
    notebooks: file(relativePath: { eq: "notebooks.JPG" }) {
      ...fluidImage, publicURL
    }
    multitudes: file(relativePath: { eq: "multitudes.JPG" }) {
      ...fluidImage, publicURL
    }
  }
`

const getPortfolioTile = (title, date, link) => {
  return (
    <div className="pv2 grow db no-underline black relative">
      <div className="portfolioDetails white dtc v-mid w-100 child pa5 absolute tc">
        <h3 className="f4 f4-ns measure-narrow">{title}</h3>
        <time className="f7 f7-ns ttu tracked">{date}</time>
      </div>
      <Img className="db w-100 portfolioImage" fluid={link} />
    </div>
  )
}
const PortfolioHome = (props) => (
  <Layout>
    <SEO title="Portfolio" />
    <main className="cf pa2">
        <div className="fl w-100 w-third-ns ph2">
          {getPortfolioTile("Spaceman Spiff Alien Invasion", "Commissioned - 2019, 4ftx5ft", props.data.spaceman_spiff.childImageSharp.fluid)}
          {getPortfolioTile("Tangles Hair Extensions and More Brand Redesign", "Commissioned - 2017", props.data.tangles.childImageSharp.fluid)}
          {getPortfolioTile("PsyScream", "Gift - 2016", props.data.psyscream.childImageSharp.fluid)}
          {getPortfolioTile("MGoLights", "Mixed Media - 2018", props.data.mgolights.childImageSharp.fluid)}
          {getPortfolioTile("C&H Fall, Astro Quad", "2017", props.data.multitudes.childImageSharp.fluid)}
          {getPortfolioTile("Snoopy Beach Day", "Gift - 2017", props.data.snoopy.childImageSharp.fluid)}

        </div>
        <div className="fl w-50 w-third-ns ph2">
          {getPortfolioTile("Jillian's Bakery", "Brand Design - 2015", props.data.hail_to_the_chip.childImageSharp.fluid)}
          {getPortfolioTile("Castle Black", "Commissioned - 2019 4ftx5ft", props.data.thewall.childImageSharp.fluid)}
          {getPortfolioTile("Minnesota Birch", "Commissioned - 2019", props.data.minnesota_birch.childImageSharp.fluid)}
          {getPortfolioTile("Notebooks", "Mixed Media - 2014", props.data.notebooks.childImageSharp.fluid)}
          {getPortfolioTile("Office Posters", "2014", props.data.posters.childImageSharp.fluid)}
          {getPortfolioTile("Tea and Cake", "Workshop - 2015", props.data.teaNcake.childImageSharp.fluid)}
        </div>
        <div className="fl w-50 w-third-ns ph2">
          {getPortfolioTile("Cross over in Space", "Commissioned - 2019 4ftx5ft", props.data.outerspace_man.childImageSharp.fluid)}
          {getPortfolioTile("Stacy for WBSB", "Brand Design - 2014", props.data.stacy_for_wbsb.childImageSharp.fluid)}
          {getPortfolioTile("Stacy for WBSB", "Print Design - 2014", props.data.sgbrickman_flyer.childImageSharp.fluid)}
          {getPortfolioTile("Mr. Engineer 2012", "Brand Design - 2011", props.data.mrengineer.childImageSharp.fluid)}
          {getPortfolioTile("Minnesota Nice", "Wood Burning - 2017", props.data.mnNice.childImageSharp.fluid)}
          {getPortfolioTile("Paint Night", "Workshop - 2016", props.data.paintnight.childImageSharp.fluid)}
        </div>
    </main>
  </Layout>
)

export default PortfolioHome
