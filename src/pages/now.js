import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NowPage = () => (
  <Layout>
    <SEO title="Now" />
		<article class="pa3 pa5-ns">
			<h1 class="f3 f2-m f1-l headers">Now</h1>
				<h2 class="f3 headers lh-title mt2">
					Back to Campus, Back to School
				</h2>
				<time class="f6 ttu tracked text">Q3 2019</time>
				<p class="measure lh-copy text">
					To a certain extent Q2 2019 was a whirlwind, and in other ways it was a drag. Looking back, I think I was a bit burnt out
					from all the grad school work as well as all the work for THINK. The final push to get my MSDS application submitted was
					fruitful (I got in!) but accelerated my timeline by 2 months. I had been holding onto this big secret for months, and it
					didn’t feel real until I told my manager. I thought breaking the news was going to be the hard part - in reality it was time
					management. My original plan was to start my academic leave of absence before the Forté conference (giving me a little over
					a month off), but with the dual degree, I would have to be on campus by July 1st. 
				</p>
			<p class="measure lh-copy text">
				Forté was a no-go (unfortunately), and I spent most of my remaining time in Rochester painting, making pizza, baking, and
				attempting to spend time with the folks I care about the most. I think it’s fair to say that I am incredibly proud of the
				work I contributed this quarter. The 3 canvas paintings I made for Chris turned out really well - I’m the most proud of
				the composition (aliens, and GOT landscape) and technique (star destroyer,  and GOT forest) I was able to build across all
				three projects. If I had more time, I would have tried to sweet talk Pasquale into letting me learn from him, but I think
				YouTube University TM took me far enough on my journey to being a competent pizzaiolo. I’m also glad I was able to make a
				trip up to Duluth. I would have felt really silly if I hadn’t made a trip up there considering that I was in Minnesota for
				almost 5 years. 
			</p>
			<p class="measure lh-copy text">
				As I half jokingly predicted, my housewarming party was also my send off party. As with quite a few things, I could have
				planned a lot better — packing was one of them.  Most of my mental checklists and packing lists never made it to paper,
				and were procrastinated away; which made the final few days in Rochester unnecessarily stressful. I think my biggest
				takeaway from this quarter is that artificial chaos is frustrating on many levels - self induced is bad enough, but
				when it impacts more people its exponentially worse. 
			</p>
		</article>
		<footer class="pv4 ph3 ph5-m ph6-l text">
			<small class="mt3 tc">Inspired by <a href="https://www.jeremiahlee.com/">Jeremiah Lee</a>, who got the idea from <a href="https://taylordavidson.com/now">Taylor Davidson</a>. For more info, check out <a href="https://nownownow.com/about">/now</a></small>
		</footer>
  </Layout>
)

export default NowPage
