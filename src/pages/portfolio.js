import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"

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
      ...fluidImage
    }
    spaceman_spiff: file(relativePath: { eq: "spaceman_spiff.jpg" }) {
      ...fluidImage
    }
    outerspace_man: file(relativePath: { eq: "outerspace_man.jpg" }) {
      ...fluidImage
    }
    hail_to_the_chip: file(relativePath: { eq: "hailtothechip.PNG" }) {
      ...fluidImage
    }
    stacy_for_wbsb: file(relativePath: { eq: "stacyforWBSB.PNG" }) {
      ...fluidImage
    }
    sgbrickman_flyer: file(relativePath: { eq: "sgbrickman_flyer.png" }) {
      ...fluidImage
    }
    mrengineer: file(relativePath: { eq: "mrengineer.png" }) {
      ...fluidImage
    }
    tangles: file(relativePath: { eq: "tangles.png" }) {
      ...fluidImage
    }
    psyscream: file(relativePath: { eq: "psyscream.jpg" }) {
      ...fluidImage
    }
    mnNice: file(relativePath: { eq: "mnNice.jpg" }) {
      ...fluidImage
    }
    mgolights: file(relativePath: { eq: "mgolights.jpg" }) {
      ...fluidImage
    }
    snoopy: file(relativePath: { eq: "snoopy.jpg" }) {
      ...fluidImage
    }
    teaNcake: file(relativePath: { eq: "teaNcake.jpg" }) {
      ...fluidImage
    }
    thewall: file(relativePath: { eq: "thewall.JPG" }) {
      ...fluidImage
    }
    posters: file(relativePath: { eq: "posters.JPG" }) {
      ...fluidImage
    }
    paintnight: file(relativePath: { eq: "paintnight.JPG" }) {
      ...fluidImage
    }
    notebooks: file(relativePath: { eq: "notebooks.JPG" }) {
      ...fluidImage
    }
    multitudes: file(relativePath: { eq: "multitudes.JPG" }) {
      ...fluidImage
    }
  }
`

const PortfolioHome = (props) => (
  <Layout>
    <SEO title="Now" />
    <main className="cf pa2">
        <div className="fl w-100 w-third-ns ph2">
          <a href="" className="pv2 grow db no-underline black"><Img className="db w-100" fluid={props.data.spaceman_spiff.childImageSharp.fluid} /></a>
          <a href="" className="pv2 grow db no-underline black"><Img className="db w-100" fluid={props.data.tangles.childImageSharp.fluid} /></a>
          <a href="" className="pv2 grow db no-underline black"><Img className="db w-100" fluid={props.data.psyscream.childImageSharp.fluid} /></a>
          <a href="" className="pv2 grow db no-underline black"><Img className="db w-100" fluid={props.data.mgolights.childImageSharp.fluid} /></a>
          <a href="" className="pv2 grow db no-underline black"><Img className="db w-100" fluid={props.data.multitudes.childImageSharp.fluid} /></a>
          <a href="" className="pv2 grow db no-underline black"><Img className="db w-100" fluid={props.data.posters.childImageSharp.fluid} /></a>
        </div>
        <div className="fl w-50 w-third-ns ph2">
          <a href="" className="pv2 grow db no-underline black"><Img className="db w-100" fluid={props.data.hail_to_the_chip.childImageSharp.fluid} /></a>
          <a href="" className="pv2 grow db no-underline black"><Img className="db w-100" fluid={props.data.thewall.childImageSharp.fluid} /></a>
          <a href="" className="pv2 grow db no-underline black"><Img className="db w-100" fluid={props.data.minnesota_birch.childImageSharp.fluid} /></a>
          <a href="" className="pv2 grow db no-underline black"><Img className="db w-100" fluid={props.data.notebooks.childImageSharp.fluid} /></a>
          <a href="" className="pv2 grow db no-underline black"><Img className="db w-100" fluid={props.data.teaNcake.childImageSharp.fluid} /></a>
        </div>
        <div className="fl w-50 w-third-ns ph2">
          <a href="" className="no-underline pv2 grow db"><Img className="db w-100" fluid={props.data.outerspace_man.childImageSharp.fluid} /></a>
          <a href="" className="pv2 grow db no-underline black"><Img className="db w-100" fluid={props.data.stacy_for_wbsb.childImageSharp.fluid} /></a>
          <a href="" className="pv2 grow db no-underline black"><Img className="db w-100" fluid={props.data.sgbrickman_flyer.childImageSharp.fluid} /></a>
          <a href="" className="pv2 grow db no-underline black"><Img className="db w-100" fluid={props.data.mrengineer.childImageSharp.fluid} /></a>
          <a href="" className="pv2 grow db no-underline black"><Img className="db w-100" fluid={props.data.mnNice.childImageSharp.fluid} /></a>
          <a href="" className="pv2 grow db no-underline black"><Img className="db w-100" fluid={props.data.paintnight.childImageSharp.fluid} /></a>
          <a href="" className="pv2 grow db no-underline black"><Img className="db w-100" fluid={props.data.snoopy.childImageSharp.fluid} /></a>
        </div>
    </main>
  </Layout>
)

export default PortfolioHome
