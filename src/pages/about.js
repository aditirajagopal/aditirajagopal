import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"

const Sketch = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "sketchofme.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} class="aspect-ratio--object cover" />
}

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
		<article class="cf">
		  <div class="fl w-100 w-50-ns bg-white pr5">
				<article>
				  <h1 class="f3 f2-m f1-l">who me?</h1>
	        <p class="f6 lh-copy measure mt0-ns mb0 pb3">
				    Michigan made, Charlottesville based, Aditi Rajagopal is a technologist, aspiring artist,
				    SWE advocate, and rising policy wonk. She is a student at University of Virginia where she
				    is pursuing her MBA and Masters in Data Science.
				  </p>
	        <p class="f6 lh-copy measure mt0-ns mb0 pb3">
				    In terms of career aspirations, the path is unclear, but the ultimate 'lifestyle' destination
				    is fairly clear: to be in a postion to help people and organizations in terms of data comprehension,
				    analytics, and integrity, UI/UX design, and public policy. In a nutshell, she thinks it would be cool
				    to be empowered to work on a product like the iPadOS, and also help with a local campaign/non-profit/small business/tech policy work
				    with ease.
				  </p>
	        <p class="f6 lh-copy measure mt0-ns mb0">
	        	Also, I'm totally not an icefishing wunderkind. But I'd say I'm a pretty good artist.
				  </p>
				</article>
		  </div>
		  <div class="fl w-100 w-50-ns bg-white tc">
				<div class="aspect-ratio aspect-ratio--3x4 mb4">
					<Image imgName="sketchofme.png" />
			  </div>
		  </div>
		</article>
  </Layout>
)

export default AboutPage
