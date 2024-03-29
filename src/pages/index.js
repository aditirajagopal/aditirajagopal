import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const Profile = () => {
  const data = useStaticQuery(graphql`{
  placeholderImage: file(relativePath: {eq: "profile.png"}) {
    childImageSharp {
      gatsbyImageData(width: 300, layout: CONSTRAINED)
    }
  }
}
`)

  return (
    <GatsbyImage
      image={data.placeholderImage.childImageSharp.gatsbyImageData}
      className="dib w4 h4 br-100 ml4" />
  );
}

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <article class="cf">
      <time className="headers">Hi, my name is</time>
    <div class="flex v-mid mb4">
      <h1 className="f-subheadline lh-title measure-narrow mv0">
        <span className="lh-copy headers tracked-tight">
          aditi rajagopal
        </span>
      </h1>
        <Profile />
    </div>
      <div class="fl w-100 w-60-ns gray">
        <div style={{ paddingRight: `2rem` }}>
        <h2 class="f4 lh-title headers">
          Midwest born and raised, aspiring VC, software engineer, data scientist and artist by practice
        </h2>
        <p class="f6 lh-copy measure mt0-ns mb0 text">
          I'm currently a student at University of Virginia pursuing my MBA and Masters in Data Science (at the Darden School of Business & School of Data Science respectively) graduating in May 2021! Prior to this, I was a sofware engineer at IBM for (almost) 5 years, working primarily on cloud infrastructure services -- most recently, the IBM Kubernetes Service on their UI/Design Team. I also served as Treasurer of the Society of Women Engineers Minnesota Professional Section for the FY18 & FY19 fiscal years.
        </p>
        <footer>
          <time className="f7 mb2 dib ttu tracked mt3 light-gray"><small>Last Updated: May 2021</small></time>
        </footer>
        </div>
      </div>
      <div class="fl w-100 w-40-ns white">
        <div className="fn fl-ns">
        <b class="db f4 mb1 lh-copy ba bl-0 bt-0 br-0 bw-3 b--black-3 headers">Main focus:</b>
          <div className="flex pa2 text">
            <span className="w2">💻</span>
            <span className="f6 lh-title ml3 pl2">
              Academics: Societal Issues in Business, Deep Learning, General Managers Taking Action, Hot Topics in Analytics
            </span>
          </div>
          <div className="flex pa2 text">
            <span className="w2">🔮</span>
            <span className="f6 lh-title ml3 pl2">Currently: Product & Data Ops at CoderPad, Venture Fellow at AmplifyHer Ventures</span>
          </div>
          <div className="flex pa2 text">
            <span className="w2">📝</span>
            <span className="f6 lh-title ml3 pl2">In Progress: Final Exams & Papers, Beach week at OXB, Graduation (5/21-5/23)</span>
          </div>
        <b class="db f4 mb1 lh-copy ba bl-0 bt-0 br-0 bw-3 b--black-3 headers">On the Horizon</b>
          <div className="flex pa3 text">
            <span className="w2">🛠</span>
            <Link className="f6 lh-title ml3 gray bg-animate hover-light-gray" to="/learningplan" title="Learning Plan">Working on Something New</Link>
          </div>
        </div>
        <footer class="tc-l">
          <a class="no-underline gray bg-animate hover-light-gray inline-flex items-center ma2 tc br2 pa2" href="https://github.com/aditirajagopal" title="GitHub">
            <svg class="dib w1 h1" fill="currentColor" viewBox="0 0 16 16" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M8 0C3.58 0 0 3.582 0 8c0 3.535 2.292 6.533 5.47 7.59.4.075.547-.172.547-.385 0-.19-.007-.693-.01-1.36-2.226.483-2.695-1.073-2.695-1.073-.364-.924-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824 1.225.824.714 1.223 1.873.87 2.33.665.072-.517.278-.87.507-1.07-1.777-.2-3.644-.888-3.644-3.953 0-.873.31-1.587.823-2.147-.083-.202-.358-1.015.077-2.117 0 0 .672-.215 2.2.82.638-.178 1.323-.266 2.003-.27.68.004 1.364.092 2.003.27 1.527-1.035 2.198-.82 2.198-.82.437 1.102.163 1.915.08 2.117.513.56.823 1.274.823 2.147 0 3.073-1.87 3.75-3.653 3.947.287.246.543.735.543 1.48 0 1.07-.01 1.933-.01 2.195 0 .215.144.463.55.385C13.71 14.53 16 11.534 16 8c0-4.418-3.582-8-8-8"/></svg>
          </a>
          <a class="no-underline gray bg-animate hover-light-gray inline-flex items-center ma2 tc br2 pa2" href="https://instagram.com/aditi_rajagopal" title="Instagram">
            <svg class="dib w1 h1" fill="currentColor" viewBox="0 0 16 16" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M8 0C5.827 0 5.555.01 4.702.048 3.85.088 3.27.222 2.76.42c-.526.204-.973.478-1.417.923-.445.444-.72.89-.923 1.417-.198.51-.333 1.09-.372 1.942C.008 5.555 0 5.827 0 8s.01 2.445.048 3.298c.04.852.174 1.433.372 1.942.204.526.478.973.923 1.417.444.445.89.72 1.417.923.51.198 1.09.333 1.942.372.853.04 1.125.048 3.298.048s2.445-.01 3.298-.048c.852-.04 1.433-.174 1.942-.372.526-.204.973-.478 1.417-.923.445-.444.72-.89.923-1.417.198-.51.333-1.09.372-1.942.04-.853.048-1.125.048-3.298s-.01-2.445-.048-3.298c-.04-.852-.174-1.433-.372-1.942-.204-.526-.478-.973-.923-1.417-.444-.445-.89-.72-1.417-.923-.51-.198-1.09-.333-1.942-.372C10.445.008 10.173 0 8 0zm0 1.44c2.136 0 2.39.01 3.233.048.78.036 1.203.166 1.485.276.374.145.64.318.92.598.28.28.453.546.598.92.11.282.24.705.276 1.485.038.844.047 1.097.047 3.233s-.01 2.39-.048 3.233c-.036.78-.166 1.203-.276 1.485-.145.374-.318.64-.598.92-.28.28-.546.453-.92.598-.282.11-.705.24-1.485.276-.844.038-1.097.047-3.233.047s-2.39-.01-3.233-.048c-.78-.036-1.203-.166-1.485-.276-.374-.145-.64-.318-.92-.598-.28-.28-.453-.546-.598-.92-.11-.282-.24-.705-.276-1.485C1.45 10.39 1.44 10.136 1.44 8s.01-2.39.048-3.233c.036-.78.166-1.203.276-1.485.145-.374.318-.64.598-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276C5.61 1.45 5.864 1.44 8 1.44zm0 2.452c-2.27 0-4.108 1.84-4.108 4.108 0 2.27 1.84 4.108 4.108 4.108 2.27 0 4.108-1.84 4.108-4.108 0-2.27-1.84-4.108-4.108-4.108zm0 6.775c-1.473 0-2.667-1.194-2.667-2.667 0-1.473 1.194-2.667 2.667-2.667 1.473 0 2.667 1.194 2.667 2.667 0 1.473-1.194 2.667-2.667 2.667zm5.23-6.937c0 .53-.43.96-.96.96s-.96-.43-.96-.96.43-.96.96-.96.96.43.96.96z"/></svg>
          </a>
          <a class="no-underline gray bg-animate hover-light-gray inline-flex items-center ma2 tc br2 pa2" href="http://linkedin.com/in/aditirajagopal" title="LinkedIn">
            <svg class="dib w1 h1" fill="currentColor" viewBox="0 0 16 16" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M13.632 13.635h-2.37V9.922c0-.886-.018-2.025-1.234-2.025-1.235 0-1.424.964-1.424 1.96v3.778h-2.37V6H8.51V7.04h.03c.318-.6 1.092-1.233 2.247-1.233 2.4 0 2.845 1.58 2.845 3.637v4.188zM3.558 4.955c-.762 0-1.376-.617-1.376-1.377 0-.758.614-1.375 1.376-1.375.76 0 1.376.617 1.376 1.375 0 .76-.617 1.377-1.376 1.377zm1.188 8.68H2.37V6h2.376v7.635zM14.816 0H1.18C.528 0 0 .516 0 1.153v13.694C0 15.484.528 16 1.18 16h13.635c.652 0 1.185-.516 1.185-1.153V1.153C16 .516 15.467 0 14.815 0z" fill-rule="nonzero"/></svg>
          </a>
          <a class="no-underline gray bg-animate hover-light-gray inline-flex items-center ma2 tc br2 pa2" href="https://twitter.com/aditi_rajagopal" title="Twitter">
            <svg class="dib w1 h1" fill="currentColor" viewBox="0 0 16 16" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M16 3.038c-.59.26-1.22.437-1.885.517.677-.407 1.198-1.05 1.443-1.816-.634.375-1.337.648-2.085.795-.598-.638-1.45-1.036-2.396-1.036-1.812 0-3.282 1.468-3.282 3.28 0 .258.03.51.085.75C5.152 5.39 2.733 4.084 1.114 2.1.83 2.583.67 3.147.67 3.75c0 1.14.58 2.143 1.46 2.732-.538-.017-1.045-.165-1.487-.41v.04c0 1.59 1.13 2.918 2.633 3.22-.276.074-.566.114-.865.114-.21 0-.416-.02-.617-.058.418 1.304 1.63 2.253 3.067 2.28-1.124.88-2.54 1.404-4.077 1.404-.265 0-.526-.015-.783-.045 1.453.93 3.178 1.474 5.032 1.474 6.038 0 9.34-5 9.34-9.338 0-.143-.004-.284-.01-.425.64-.463 1.198-1.04 1.638-1.7z" fill-rule="nonzero"/></svg>
          </a>
        </footer>

      </div>
    </article>
  </Layout>
)

export default IndexPage
