import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const PTOPage = () => (
  <Layout>
    <SEO title="PTO" />
		<article class="pa3 pa5-ns">
			<p class="measure lh-copy">
				<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vRohCYP1-PCS2sc4CIB9Rk0sZuxpjqBPg73EQcExTgNSb6NOP1XlIYrFajuRu2sxuZi80uHFxkWPzZb/embed?start=false&loop=true&delayms=30000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
			</p>
		</article>
		<footer class="pv4 ph3 ph5-m ph6-l mid-gray">
			<small class="mt3">Inspired by <a href="https://amy.dev/?p=979">Amy Nguyen</a> and <a href="https://www.bcg.com/careers/working-at-bcg/corporate-culture.aspx">Predictability, Teaming, and Open Communication (PTO)</a></small>
			<br/>
			<br/>
			<time class="f6 ttu tracked gray"><small>Last Updated: Oct. 2020</small></time>
		</footer>
  </Layout>
)

export default PTOPage
