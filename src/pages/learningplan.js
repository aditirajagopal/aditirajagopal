import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import portfoliopdf from "../components/Aditi_Rajagopal_Portfolio.pdf"


const LearningPlanPage = (props) => (
  <Layout>
    <SEO title="Learning Plan Page" />
		<h1 class="f3 f2-m f1-l headers">Learning Plan and Reflections</h1>
		<p>
			When I finished undergrad, I left thinking that I would never pursue another degree, yet alone another technical degree. 
			Though I did not anticipate that the learning would stop, I did not feel the urgency for continuous learning - I had the self-reassurance
			that I would learn on the job, and the skillset that I gained on the job would eventually allow me to find a role that I loved. When that 
			promise did not come, I drove my energy into applying for business school. I felt that I needed the structure and clean break to make a shift
			in my life and trajectory. 7 years and 2 degrees later, I find myself reentering an unstructured environment. Being aware is half the battle, 
			but this time around I feel a more pressing need to create a more structured regimen for continuous learning. After reflecting on the last academic
			year, the following are focus areas I'd like to tackle over the next year post-graduation: 
		</p>

			<ul class="list pl0">
			  <li class="pa1 pa2-ns bb b--black-10">
			    <b class="db f3 mb1">Business Analytics</b>
			    <p>During my time at CoderPad I had the opportunity to take deep dive into the company's product, financial, and marketing data. Though I was able to
			       put into practice much of my learnings from the dual degree program, I found that there were a lot of practical and tactical gaps in my knowledge of 
			       business analytics. Though the following courses and resources, I'm hoping to build out some of these skills:
			    </p>
			    <span class="f5 db lh-copy measure">
			    <li>https://www.coursera.org/lecture/strategic-business-analytics/using-classification-and-regression-techniques-to-forecast-5Bbwg</li>
				<li>https://github.com/poteto/hiring-without-whiteboards</li>
				<li>ESG Course - https://courses.corporatefinanceinstitute.com/users/</li>
				<li>https://www.coursera.org/learn/build-data-science-team</li>
				<li>https://www.linkedin.com/learning/tableau-essential-training-2020-1/apply-the-power-of-tableau-2020-to-your-data</li>
				<li>https://clevertap.com/blog/cohort-analysis/</li>
				<li>https://www.coursera.org/professional-certificates/google-data-analytics#courses</li>
				</span>
			  </li>
			  <li class="pa1 pa2-ns bb b--black-10">
			    <b class="db f3 mb1">
			      Data Science
			    </b>
			    <p>Data Science is a rapidly evolving field, and though I'm coming away with a masters degree, I know that I could brush up on the curriculum from the fall term
			    (particularly Bayesian ML and Data Mining), and there is so much more to learn on the ML Ops and CS side. It would be great to build out some practical applications of ML in the process.   
			    </p>
			    <span class="f5 db lh-copy measure">
			    <li>Data Science for Business by Foster Provost & Tom Fawcett</li>
			    <li>FastAI Introduction to Deep Learning - https://github.com/fastai/fastbook, https://course.fast.ai/videos/?lesson=1</li>
				<li>Forecasting: Principles and Practice - https://otexts.com/fpp3/</li>
			    <li>ML Crash Course - https://developers.google.com/machine-learning/crash-course</li>
			    <li>Google's Python Class - https://developers.google.com/edu/python</li>
			    <li>Python For MBAs - https://www.amazon.com/dp/B087T2KMDL</li>
			    <li>Women Who Code ML Course - https://www.youtube.com/playlist?list=PLVcEZG2JPVhfK8MnBqcxAzwMIfpH0XpX9</li>
			    <li>Advanced SQL - https://www.linkedin.com/learning/advanced-sql-for-application-development/getting-started-with-sql-for-application-developers?u=2203468</li>
			    </span>
			  </li>
			  <li class="pa1 pa2-ns bb b--black-10">
			    <b class="db f3 mb1">
			      Community Building and Content Strategy
			    </b>
			    <span class="f5 db lh-copy measure">
			    <li>Building Your Twitter Audience - https://gumroad.com/svpino</li>
			    <li>How to Build a Content Strategy - https://www.columnfivemedia.com/how-to-create-a-content-strategy</li>
			    <li>https://corinneriley.medium.com/community-led-growth-the-product-led-growth-expansion-pack-b474ab9a7940</li>
			    <li>https://www.community.club/mentorship</li>
			    </span>
			  </li>
			  <li class="pa1 pa2-ns bb b--black-10">
			    <b class="db f3 mb1">
			      Career and Personal Development
			    </b>
			    <span class="f5 db lh-copy measure">
			      <li>The Art of Self Coaching - https://www.edbatista.com/the-art-of-self-coaching-public-course.html</li>
			      <li>https://kellblog.com/2015/03/08/career-development-what-it-really-means-to-be-a-manager-director-or-vp/</li>
			      <li>Ritual Design - https://medium.com/ritual-design/introducing-ritual-design-meaning-purpose-and-behavior-change-44d26d484edf</li>
			    </span>
			  </li>
			  <li class="pa1 pa2-ns bb b--black-10">
			    <b class="db f3 mb1">
			      Things to Build 
			    </b>
			    <span class="f5 db lh-copy measure">
			      <li>No Code Solutions & Rapid Prototyping - https://learningnocode.com/, https://zeroqode.com/zerocodeconf, https://www.nocode.mba/sign-up</li>
			      <li>https://kellblog.com/2015/03/08/career-development-what-it-really-means-to-be-a-manager-director-or-vp/</li>
			      <li>Ritual Design - https://medium.com/ritual-design/introducing-ritual-design-meaning-purpose-and-behavior-change-44d26d484edf</li>
			    </span>
			  </li>
			  <li class="pa1 pa2-ns bb b--black-10">
			    <b class="db f3 mb1">
			      To Read (or Reread)
			    </b>
			    <span class="f5 db lh-copy measure">
				<li>Venture Deals</li>
				<li>Ultimate Questions (Andy Wicks)</li>
				<li>Founders At Work By Jessica Livingston</li>
				<li>Venture Capitalists At Work</li>
				<li>The Dark Side of Valuation</li>
				<li>Joseph Campbell and the Power of Myth - The Hero's Adventure (https://billmoyers.com/content/ep-1-joseph-campbell-and-the-power-of-myth-the-hero%E2%80%99s-adventure-audio/)</li>
				<li>Data Driven by Amal Bhatnagar</li>
				<li>A Civic Technologist's Practice Guide Book by Cyd Harrell</li>
				<li>The Making of a Manager: What to Do When Everyone Looks to You by Julie Zhuo</li>
				<li>The Pmarca Blog Archives (select posts from 2007-2009) by Marc Andreessen</li>
				<li>Getting To Yes by Fisher & Ury</li>
				<li>https://www.saas-knowledge-base.com/docs/why-we-fail-at-scale-lessons-from-studying-10472-saas-companies</li>
			    <li>Jim Stein Sharpe's Entrepreneurship through Acquisition Blog - https://jimsteinsharpe.com/</li>
			    </span>
			  </li>
			</ul>

		<footer class="text">
			<small class="mt3 tc pb4">Thanks for reading! If you have any suggestions, tweet me at @aditi_rajagopal</small>
		</footer>
  </Layout>
)

export default LearningPlanPage