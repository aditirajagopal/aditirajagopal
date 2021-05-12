import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"

const DogAndMe = () => {
  const data = useStaticQuery(graphql`{
  placeholderImage: file(relativePath: {eq: "dog_and_me.JPG"}) {
    childImageSharp {
      gatsbyImageData(width: 480, height: 600, layout: CONSTRAINED)
    }
  }
}
`)

  return (
    <GatsbyImage
      image={data.placeholderImage.childImageSharp.gatsbyImageData}
      class="" />
  );
}

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
		<article class="cf">
		  <div class="fl w-100 w-50-ns pr5">
				<article>
				  <h1 class="f3 f2-m f1-l headers">who me?</h1>
	        <p class="f6 lh-copy measure mt0-ns mb0 pb3 text">
				    Michigan made, Charlottesville based (but not for long!), Aditi Rajagopal is a technologist, aspiring VC, artist
				    SWE advocate, and rising policy wonk. She is a student at University of Virginia where she
				    is pursuing her MBA and Masters in Data Science and will be graduating in May.
				  </p>
				  <h2 class="f4 f3-m f2-l headers">fast facts</h2>
			<dl class="lh-title mt0 text">
			  <dt class="f6 b">How to Pronounciate My Name</dt>
			  <dd class="ml0">/ah-dee-tee/ /rah-jah-go-paal/ (it's phonetic!)</dd>
			  <dt class="f6 b mt2">Current Location</dt>
			  <dd class="ml0">Charlottesville, VA</dd>
			  <dt class="f6 b mt2">Hometown</dt>
			  <dd class="ml0">West Bloomfield, MI</dd>
			  <dt class="f6 b mt2">Myers Briggs</dt>
			  <dd class="ml0">ENFP (Campaigner)</dd>
			  <dt class="f6 b mt2">Strengths Finder Top 5</dt>
			  <dd class="ml0">Empathy, Individualization, Strategic, Restorative, Achiever</dd>
			  <dt class="f6 b mt2">Alumni of</dt>
			  <dd class="ml0">University of Michigan (Go Blue!), IBM, University of Virginia, Transform Capital, Fin VC, CoderPad</dd>
			  <dt class="f6 b mt2">Resume</dt>
			  <dd class="ml0"><a href="https://drive.google.com/file/d/1k2UC3ZYE16dIHOPuDqmfgUNoUD_GbEhk/view?usp=sharing">Can be found here</a></dd>
			</dl>
				</article>
		  </div>
		  <div class="fl w-100 w-50-ns tc">
			<div class="aspect-ratio aspect-ratio--3x4 mb4 pb4">
			<DogAndMe />
			<br/>
			<br/>
			<iframe src="https://drive.google.com/file/d/1ALa2IL7-iR-VWs-LYHRpL98v3SA7-Ez7/preview" width="480" height="280"></iframe>
			</div>
		  </div>
		</article>
  </Layout>
)

export default AboutPage
